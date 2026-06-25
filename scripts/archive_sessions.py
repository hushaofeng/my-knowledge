#!/usr/bin/env python3
"""
Hermes Session Archiver
Extract Hermes conversation sessions and archive them as Markdown files
into the my-knowledge Gitee repository.
"""

import json
import os
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path

# --- Config ---
SESSIONS_DIR = Path.home() / ".hermes" / "sessions"
REPO_DIR = Path.home() / "my-knowledge"
ARCHIVE_DIR = REPO_DIR / "sessions"
MANIFEST_FILE = REPO_DIR / ".archive_manifest.json"


def load_manifest():
    """Load the archive manifest (tracking which sessions have been archived)."""
    if MANIFEST_FILE.exists():
        with open(MANIFEST_FILE) as f:
            return json.load(f)
    return {"archived_ids": []}


def save_manifest(manifest):
    with open(MANIFEST_FILE, "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    # Add to .gitignore so it doesn't pollute the repo
    gitignore = REPO_DIR / ".gitignore"
    if not gitignore.exists():
        with open(gitignore, "w") as f:
            f.write(".archive_manifest.json\nscripts/\n")
    else:
        content = gitignore.read_text()
        if ".archive_manifest.json" not in content:
            with open(gitignore, "a") as f:
                f.write("\n.archive_manifest.json\n")


def extract_conversation(session_data):
    """Extract clean user-assistant conversation from session data."""
    messages = session_data.get("messages", [])
    conversation = []

    for msg in messages:
        role = msg.get("role", "")
        content = msg.get("content", "")

        # Skip tool messages (raw tool output)
        if role == "tool":
            continue

        # Skip assistant messages that are empty (thinking/invocation only)
        if role == "assistant" and (not content or content.strip() == ""):
            continue

        conversation.append({"role": role, "content": content})

    return conversation


def format_as_markdown(session_data, conversation):
    """Format session data into readable Markdown."""
    session_id = session_data.get("session_id", "unknown")
    model = session_data.get("model", "unknown")
    platform = session_data.get("platform", "unknown")
    session_start = session_data.get("session_start", "")

    # Parse date
    try:
        dt = datetime.fromisoformat(session_start)
        date_str = dt.strftime("%Y-%m-%d %H:%M:%S")
        date_prefix = dt.strftime("%Y-%m-%d")
        year = str(dt.year)
    except (ValueError, TypeError):
        date_str = session_start
        date_prefix = "unknown-date"
        year = "unknown"

    # Generate title from the first user message
    first_user_msg = ""
    for msg in conversation:
        if msg["role"] == "user":
            first_user_msg = msg["content"][:80].strip()
            break

    title = f"{date_prefix} - {first_user_msg}" if first_user_msg else f"Session {date_prefix}"

    lines = []
    lines.append(f"# {title}")
    lines.append("")
    lines.append(f"- **日期**: {date_str}")
    lines.append(f"- **模型**: {model}")
    lines.append(f"- **平台**: {platform}")
    lines.append(f"- **Session ID**: {session_id}")
    lines.append("")
    lines.append("---")
    lines.append("")

    for msg in conversation:
        role = msg["role"]
        content = msg["content"]

        # Clean up content
        content = content.strip()

        if role == "user":
            lines.append(f"## 🙋 User")
            lines.append("")
            lines.append(content)
            lines.append("")
        elif role == "assistant":
            lines.append(f"## 🤖 Assistant")
            lines.append("")
            lines.append(content)
            lines.append("")

    return title, year, date_prefix, "".join(lines)


def get_all_session_files():
    """Get all session JSON files from the Hermes sessions directory."""
    if not SESSIONS_DIR.exists():
        print(f"Error: Sessions directory not found: {SESSIONS_DIR}")
        return []

    files = sorted(SESSIONS_DIR.glob("session_*.json"))
    return files


def archive_session(session_file):
    """Archive a single session file if not already archived."""
    try:
        with open(session_file) as f:
            session_data = json.load(f)
    except (json.JSONDecodeError, IOError) as e:
        print(f"  [SKIP] Failed to read {session_file.name}: {e}")
        return False

    session_id = session_data.get("session_id", session_file.stem)

    conversation = extract_conversation(session_data)
    if not conversation:
        print(f"  [SKIP] {session_file.name}: no conversation messages")
        return False

    # Check if there's at least one user-assistant exchange
    user_msgs = sum(1 for m in conversation if m["role"] == "user")
    asst_msgs = sum(1 for m in conversation if m["role"] == "assistant")
    if user_msgs == 0 or asst_msgs == 0:
        print(f"  [SKIP] {session_file.name}: incomplete conversation (user={user_msgs}, asst={asst_msgs})")
        return False

    title, year, date_prefix, markdown = format_as_markdown(session_data, conversation)

    # Create year directory
    year_dir = ARCHIVE_DIR / year
    year_dir.mkdir(parents=True, exist_ok=True)

    # Sanitize title for filename
    safe_title = re.sub(r'[\\/:*?"<>|]', '_', title[:120])
    output_path = year_dir / f"{safe_title}.md"

    # Avoid overwriting
    counter = 1
    while output_path.exists():
        output_path = year_dir / f"{safe_title}_{counter}.md"
        counter += 1

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(markdown)

    print(f"  [OK] {session_file.name} → {output_path.relative_to(REPO_DIR)}")
    return True


def git_commit_and_push():
    """Commit and push changes to Gitee."""
    os.chdir(REPO_DIR)

    # Check if there are changes
    result = subprocess.run(
        ["git", "status", "--porcelain"],
        capture_output=True, text=True, cwd=REPO_DIR
    )
    if not result.stdout.strip():
        print("No changes to commit.")
        return True

    # Add all
    subprocess.run(["git", "add", "-A"], cwd=REPO_DIR, capture_output=True)

    # Commit
    today = datetime.now().strftime("%Y-%m-%d %H:%M")
    commit_result = subprocess.run(
        ["git", "commit", "-m", f"📚 知识归档: {today}"],
        capture_output=True, text=True, cwd=REPO_DIR
    )
    print(f"  Commit: {commit_result.stdout.strip()}")

    # Push
    push_result = subprocess.run(
        ["git", "push"],
        capture_output=True, text=True, cwd=REPO_DIR
    )
    print(f"  Push: {push_result.stdout.strip()}")
    if push_result.stderr:
        print(f"  Stderr: {push_result.stderr.strip()}")

    return push_result.returncode == 0


def main():
    print("=" * 60)
    print("📚 Hermes Session Archiver")
    print("=" * 60)
    print()

    manifest = load_manifest()
    archived_ids = set(manifest.get("archived_ids", []))

    session_files = get_all_session_files()
    print(f"Found {len(session_files)} session files")
    print()

    new_count = 0
    for session_file in session_files:
        # Check if this session ID is already archived
        session_id_from_name = session_file.stem.replace("session_", "", 1)
        if session_id_from_name in archived_ids:
            continue

        print(f"Processing: {session_file.name}")
        if archive_session(session_file):
            manifest["archived_ids"].append(session_id_from_name)
            new_count += 1
        print()

    save_manifest(manifest)

    print(f"Archived {new_count} new session(s)")
    print()
    print("Committing and pushing to Gitee...")
    git_commit_and_push()
    print()
    print("✅ Done!")


if __name__ == "__main__":
    main()
