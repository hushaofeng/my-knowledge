#!/usr/bin/env python3
"""重算网络安全学习计划进度，回写各文档顶部的进度面板。"""
import os, re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # cyber-security/
PLAN = os.path.join(BASE, '学习计划')
YEARS = [('第1年-筑基篇.md', 'YEAR1', '第1年·筑基'),
         ('第2年-实战篇.md', 'YEAR2', '第2年·实战'),
         ('第3年-专精篇.md', 'YEAR3', '第3年·专精')]

def bar(pct, width=20):
    filled = int(pct / 100 * width)
    return '█' * filled + '░' * (width - filled)

def count(path):
    s = open(path, encoding='utf-8').read()
    done = len(re.findall(r'- \[[xX]\]', s))
    todo = len(re.findall(r'- \[ \]', s))
    return done, done + todo

def panel(tag, text):
    return (f"<!-- PROGRESS:{tag}:START -->\n**{text}**\n<!-- PROGRESS:{tag}:END -->")

def rewrite(path, tag, text):
    s = open(path, encoding='utf-8').read()
    s2 = re.sub(f"<!-- PROGRESS:{tag}:START -->.*?<!-- PROGRESS:{tag}:END -->",
                panel(tag, text).replace('\\', '\\\\'), s, flags=re.S)
    if s2 != s:
        open(path, 'w', encoding='utf-8').write(s2)
        return True
    return False

total_done = total = 0
rows = []
for fname, tag, label in YEARS:
    p = os.path.join(PLAN, fname)
    d, t = count(p)
    total_done += d; total += t
    pct = round(d / t * 100) if t else 0
    rows.append((label, d, t, pct))
    rewrite(p, tag, f"{label}进度：{d}/{t} 周（{pct}%） {bar(pct)}")
    print(f"{label}: {d}/{t} 周（{pct}%）")

pct = round(total_done / total * 100) if total else 0
overall = f"整体进度：{total_done}/{total} 周（{pct}%） {bar(pct)}"
print(overall)

# 计划总览 + 目录索引的整休面板
rewrite(os.path.join(PLAN, 'index.md'), 'PLAN', overall)
rewrite(os.path.join(BASE, 'index.md'), 'OVERALL', overall)
print('进度面板已刷新 ✅')
