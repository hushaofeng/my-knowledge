---
title: 第 6 章 几何变换
date: 2026-09-05
tags:
  - 初中数学
  - 奥数
  - 几何
---

# 第 6 章 几何变换

> 变换的哲学：**把分散的线段/角度"搬"到一起**。平移搬平行、对称搬距离、旋转搬夹角——费马点、半角模型这些"名场面"全都是一招旋转的演出。

## 知识点精讲

### 1. 三大变换的搬运清单

| 变换 | 保什么 | 典型用途 |
|------|--------|---------|
| **平移** | 长度、方向、夹角 | 造桥选址、拼平行四边形 |
| **轴对称** | 长度、角度 | 将军饮马（第 2 章）、折叠 |
| **旋转** | 长度、**到旋转中心的距离** | 等腰直角/等边中的 $60°$、$90°$ 构造 |

### 2. 旋转的招牌操作

- **绕正方形顶点转 $90^\circ$**：把正方形的一条边转到另一条边上（$AD \to AB$ 型）
- **绕等边三角形顶点转 $60^\circ$**：$AB \to AC$ 型，顺带制造**等边三角形**（$PP' = PB$ 且 $\angle PBP' = 60^\circ$）
- 旋转后**新增的等腰三角形**（旋转半径对）往往直接给出 $60^\circ$ 或 $45^\circ$ 角

### 3. 费马点（Torricelli 点）

三角形内满足 $\angle APB = \angle BPC = \angle CPA = 120^\circ$ 的点 $P$ 使 $PA + PB + PC$ 最小（三角形各角 $< 120^\circ$ 时存在）。证明靠一次 $60^\circ$ 旋转 + 两次共线（见例 3）。

### 4. 半角模型（旋转的成名战例）

正方形（或等腰三角形）顶角被一条线**平分出一半**（如 $\angle EAF = 45^\circ$）时，绕 $A$ 旋转 $90^\circ$ 把两侧的"散件"拼到一起——见例 2。

## 经典例题

### 例 1（经典赛题改编·旋转 $60^\circ$）

等边 $\triangle ABC$ 内一点 $D$，$DA = 3$，$DB = 4$，$DC = 5$。求 $\triangle ABC$ 的边长。

::: details 查看解答

将 $\triangle ABD$ 绕 $B$ **顺时针旋转 $60^\circ$**（$A \to C$），$D \to D'$。

- $BD = BD' = 4$，$\angle DBD' = 60^\circ$ → $\triangle BDD'$ **等边** → $DD' = 4$
- $D'C = DA = 3$（旋转保长）

$\triangle DD'C$ 三边为 $3, 4, 5$ → **直角三角形**，$\angle DD'C = 90^\circ$。

$$\angle BDC = \angle BDD' + \angle D'DC = 60^\circ + 90^\circ = 150^\circ$$

余弦定理（$\triangle BDC$，$BD = 4$，$DC = 5$）：

$$BC^2 = 16 + 25 - 2 \cdot 4 \cdot 5 \cos 150^\circ = 41 + 20\sqrt3$$

边长 $BC = \boxed{\sqrt{41 + 20\sqrt3}}$。

**方法提炼：** $60^\circ$ 旋转把"到三顶点的距离"打包成一个三角形——$3\text{-}4\text{-}5$ 的现身是设计好的信号。
:::

### 例 2（经典赛题改编·半角模型）

正方形 $ABCD$，$E$ 在 $BC$ 上，$F$ 在 $CD$ 上，$\angle EAF = 45^\circ$。求证：$EF = BE + DF$。

::: details 查看解答

将 $\triangle ADE$ **绕 $A$ 顺时针旋转 $90^\circ$**（$AD \to AB$），$E \to G$（$G$ 在 $CB$ 延长线上）。

- $AG = AE$，$\angle GAB = \angle DAE$，$BG = DE = DF$
- $\angle GAF = \angle GAB + \angle BAF = \angle DAE + \angle BAF = 90^\circ - 45^\circ = 45^\circ = \angle EAF$

$\triangle AGF \cong \triangle AEF$（SAS：$AG = AE$，$\angle GAF = \angle EAF$，$AF$ 公共）→ $GF = EF$。

$$EF = GF = GB + BF = DE + BF = DF + BE \qquad \blacksquare$$

**方法提炼：** $\angle EAF = 45^\circ$ = "半角"使 $\angle GAF$ 与 $\angle EAF$ **相等**——旋转的全部目的就是造出这对 SAS。第 4 章习题 8 的三角函数解法在这里获得纯几何证明。
:::

### 例 3（初中联赛风格·费马点）

$\triangle ABC$ 各内角均小于 $120^\circ$，点 $P$ 满足 $\angle APB = \angle BPC = \angle CPA = 120^\circ$。证明：$PA + PB + PC$ 达到最小（即 $P$ 是费马点）。

::: details 查看解答

将 $\triangle APB$ 绕 $B$ **逆时针旋转 $60^\circ$**（$A \to A'$，$P \to P'$）。

**造等边**：$BP = BP'$，$\angle PBP' = 60^\circ$ → $PP' = PB$。

**第一处共线**：$\angle A'P'B = \angle APB = 120^\circ$（旋转保角），$\angle BP'P = 60^\circ$ →

$$\angle A'P'P = 120^\circ + 60^\circ = 180^\circ \Rightarrow A', P', P \text{ 共线}$$

**第二处共线**：$\angle P'PB = 60^\circ$，$\angle BPC = 120^\circ$ → $\angle P'PC = 360^\circ - 60^\circ - 120^\circ = 180^\circ \Rightarrow P', P, C$ 共线。

于是：

$$A'C = A'P' + P'P + PC = PA + PB + PC$$

对**任意**其他点 $Q$，同样的旋转给出 $QA + QB + QC \ge A'C$（折线 $A'Q'Q C$ 折线长 ≥ 直线段 $A'C$，其中 $Q'$ 是 $Q$ 的旋转像）。

所以 $P$ 使 $PA + PB + PC$ 最小。$\blacksquare$

**方法提炼：** 费马点证明 = **一次旋转 + 两次共线**。共线角度的来源：$120^\circ + 60^\circ = 180^\circ$——费马点 $120^\circ$ 的条件就是为这个加法准备的。
:::

### 例 4（经典赛题改编·平移造桥）

$A$ 在河的上岸（直线 $l_1$），$B$ 在上岸（直线 $l_2$），$l_1 \parallel l_2$，河宽为 $d$，桥必须垂直于河岸。求 $A$ 到 $B$ 的最短路径及桥的位置。

::: details 查看解答

路径形状固定：$A \to$ 上岸点 $M \to$ 桥 $MN$（垂直，长 $d$）$\to$ 下岸点 $N \to B$。

**平移消桥**：将 $B$ 沿桥的方向（垂直河岸）**平移 $d$** 得 $B'$（$B'$ 与 $A$ 同在 $l_1$ 侧）。则 $N = B'$ 沿桥方向的反像，且 $MN = BB'$，路径长

$$AM + MN + NB = AM + BB' + NB' = AB' + d$$

$d$ 是定值 → 只需 $AB'$ 最短 → **连直线 $AB'$**，与 $l_1$ 的交点即桥的上岸点 $M$。

最短路径长 $= AB' + d$。$\blacksquare$

**方法提炼：** "桥"是**方向和长度都固定的强制段**——平移掉它，剩下的就是两点连线。所有"造桥选址"题都是这一个模板。
:::

### 例 5（希望杯风格·旋转 $90^\circ$）

正方形 $ABCD$ 内一点 $P$，$PA = 1$，$PB = 2$，$PC = 3$。求 $\angle APB$。

::: details 查看解答

将 $\triangle BPC$ 绕 $B$ **逆时针旋转 $90^\circ$**（$C \to A$），$P \to P'$。

- $BP' = BP = 2$，$\angle PBP' = 90^\circ$ → $PP' = 2\sqrt2$，$\angle BPP' = 45^\circ$
- $P'A = PC = 3$

$\triangle APP'$ 三边：$PA = 1$，$PP' = 2\sqrt2$，$P'A = 3$。验证：

$$1^2 + (2\sqrt2)^2 = 1 + 8 = 9 = 3^2$$

→ 直角三角形，$\angle APP' = 90^\circ$。

$$\angle APB = \angle APP' - \angle BPP' = 90^\circ - 45^\circ = \boxed{45^\circ}$$

**方法提炼：** 旋转把 $PC$ 搬到 $P'A$，与 $PA$ 组成三角形——**"$1, 2, 3$ 求角"的标配解法**。$90^\circ$ 旋转赠送等腰直角三角形（$PP'$ 与 $45^\circ$）。
:::

### 例 6（经典赛题改编·旋转构造 $3\text{-}4\text{-}5$）

$P$ 是等边 $\triangle ABC$ 内一点，$PA = 3$，$PB = 4$，$\angle APB = 150^\circ$。求 $PC$ 的长。

::: details 查看解答

将 $\triangle APB$ 绕 $A$ **逆时针旋转 $60^\circ$**（$B \to C$），$P \to Q$。

- $AP = AQ = 3$，$\angle PAQ = 60^\circ$ → $\triangle APQ$ **等边** → $PQ = 3$
- $QC = PB = 4$（旋转保长），$\angle AQC = \angle APB = 150^\circ$

$$\angle PQC = \angle AQC - \angle AQP = 150^\circ - 60^\circ = 90^\circ$$

$Rt\triangle PQC$：

$$PC = \sqrt{PQ^2 + QC^2} = \sqrt{9 + 16} = \boxed{5}$$

**方法提炼：** $60^\circ$ 旋转把 $\angle APB = 150^\circ$ 拆成 $60^\circ + 90^\circ$——**大角拆直角**是旋转法的隐藏红利；$3, 4$ 的出现预示 $5$。
:::

## 习题

1. 等边 $\triangle ABC$ 内一点 $D$，$DA = 5$，$DB = 4$，$DC = 3$。求 $\triangle ABC$ 的边长。（与例 1 同构，数字轮换）
2. 用旋转法独立证明半角模型：正方形 $ABCD$，$E$ 在 $BC$ 上，$F$ 在 $CD$ 上，$\angle EAF = 45^\circ$，求证 $EF = BE + DF$。
3. 两条平行河岸相距 2（两座垂直桥各过一条"河"？改为单河）：$A(1, 3)$ 在上岸 $y = 2$ 上方，$B(6, 0)$ 在下岸 $y = 0$ 下方？设河为 $0 < y < 2$ 的带状区域，$A(1, 3)$，$B(6, -1)$，桥垂直河岸。求最短路径长及上岸点横坐标。
4. 等边三角形边长 6，求其费马点到三个顶点的距离之和。（费马点 = 中心）
5. 正方形 $ABCD$ 内一点 $P$，$PA = 1$，$PB = 2$，$PC = 3$（例 5 条件）。求正方形的边长。（提示：$\angle APB = 45^\circ$ 后在 $\triangle APB$ 中用余弦定理）
6. 证明：$P$ 是等边 $\triangle ABC$ 所在平面上任意一点，则 $PA \le PB + PC$？改为：$P$ 在等边 $\triangle ABC$ 内，$PA = 3$，$PB = 4$，$\angle APB = 150^\circ$（例 6 条件），用例 6 的旋转结果求 $\angle PAC$ 与 $60^\circ$ 的关系，进而求 $S_{\triangle APC}$？（超纲风险）——最终定题：$P$ 在等边 $\triangle ABC$ 内，$PA = 5$，$PC = 4$，$\angle APC = 120^\circ$。求 $PB$。（提示：绕 $A$ 旋转 $60^\circ$ 把 $C \to B$：构造 $5\text{-}?\text{-}4$ 组合，$PB = \sqrt{25 + 16 + 40\cos 60°}$? 认真推导后作答：旋转 $\triangle APC$ 绕 $A$ 逆时针 $60^\circ$（$C \to B$），$P \to Q$：$AQ = AP = 5$，$\angle PAQ = 60°$ → $PQ = 5$；$QB = PC = 4$；$\angle AQB = \angle APC = 120°$ → $\angle PQB = 120° - 60° = 60°$。$\triangle PQB$：$PQ = 5$，$QB = 4$，夹角 $60°$ → $PB^2 = 25 + 16 - 40\cos60° = 41 - 20 = 21$ → $PB = \sqrt{21}$。）
7. 正方形 $ABCD$ 边长 7，$P$ 在 $BC$ 上，$PB = 3$。$E$ 在 $AB$ 上，求 $AE + PE + PD$ 的最小值。（提示：$PE + PD$ 将军饮马（对称 $D$），再叠加 $AE$——把 $D$ 关于 $BC$ 对称得 $D'$，$AE + PE + PD = AE + PE + PD' \ge ?$ 分段处理：最小值在 $E, P$ 都取"反射路径与直线的交点"时达到；实际 $AE + PE$ 与 $PD$ 耦合——正确姿势：对称 $D \to D'$ 后 $AE + PE + PD' $ 是三段折线，$E$ 在 $AB$、$P$ 在 $BC$ 两条线上，用两次反射（$D \to D'$ 关于 $BC$，再整体看 $A$ 到 $D'$ 的折线过两条直线）：$AE + PE + PD' \ge AD'$？路径 $A \to E \to P \to D'$ 是从 $A$ 出发经直线 $AB$ 上一点、直线 $BC$ 上一点到 $D'$ 的折线——最短 = $AD'$（直线）当且仅当直线 $AD'$ 与 $AB$、$BC$ 的交点合法（$E$ 在线段 $AB$ 上、$P$ 在线段 $BC$ 上）。$A(0,7)$，$D'(3, -7)$（$D(7,7)$ 关于 $BC$（$x$ 轴）对称）：直线 $AD'$：从 $(0,7)$ 到 $(3,-7)$，与 $x$ 轴交于 $x = 1.5$（$P$，在 $BC$ 上 ✓），与 $AB$（$y$ 轴）交于 $A$ 自己（$E = A$？$E$ 在 $AB$ 上，直线从 $A$ 出发——$E$ 退化到 $A$ 点）→ 最小值 $= AD' = \sqrt{9 + 196} = \sqrt{205}$。验证 $E = A$ 合法（$E$ 取端点 $A$）→ 答案 $\sqrt{205}$。）
8.（压轴）费马点数值题：$\triangle ABC$ 中 $\angle BAC = 60^\circ$? 用例 3 的旋转框架：已知 $P$ 是 $\triangle ABC$ 的费马点（三个 $120^\circ$），$PA = 3$，$PB = 4$，$PC = 5$。求 $\triangle ABC$ 的三边长。（提示：$\cos 120° = -\frac12$：$AB^2 = 9 + 16 + 12 = 37$，$BC^2 = 16 + 25 + 20 = 61$，$CA^2 = 25 + 9 + 15 = 49$ → $AB = \sqrt{37}$，$BC = \sqrt{61}$，$CA = 7$）

::: details 习题答案与提示

1. 旋转 $\triangle ABD$ 绕 $B$ 顺 $60^\circ$（$A \to C$）：$DD' = 4$（等边），$D'C = 5$，$DC = 3$？——对应关系：$DA \to D'C = 5$，$DC = 3$。$\triangle DD'C$：$DD' = 4$，$D'C = 5$，$DC = 3$ → 3-4-5 直角，$\angle D'DC = 90°$ → $\angle BDC = 60° + 90° = 150°$。$BC^2 = BD^2 + DC^2 - 2 \cdot 4 \cdot 3 \cos 150° = 16 + 9 + 12\sqrt3 = 25 + 12\sqrt3$ → 边长 $\boxed{\sqrt{25 + 12\sqrt3}}$。
2. 见例 2 完整证明，遮住后独立书写：旋转 $\triangle ADE \to \triangle ABG$，证 $\triangle AGF \cong \triangle AEF$（SAS），$EF = GF = GB + BF = DF + BE$。
3. 桥竖直，将 $B(6,-1)$ 上移 2 得 $B'(6, 1)$。$AB' = \sqrt{(6-1)^2 + (1-3)^2} = \sqrt{25 + 4} = \sqrt{29}$。最短路径 $= \sqrt{29} + 2$。上岸线 $y = 2$ 交 $AB'$：从 $(1,3)$ 到 $(6,1)$：$y = 3 - \frac{2}{5}(x-1) = 2 \Rightarrow x = 3.5$。上岸点 $(3.5, 2)$。
4. 费马点即中心（三线交点），到顶点距离 $= \dfrac{2}{3} \times$ 高 $= \dfrac23 \times 3\sqrt3 = 2\sqrt3$，和 $= \boxed{6\sqrt3}$。
5. 余弦定理在 $\triangle APB$（$\angle APB = 45^\circ$）：$AB^2 = 1 + 4 - 2 \cdot 1 \cdot 2 \cdot \frac{\sqrt2}{2} = 5 - 2\sqrt2$ → 边长 $AB = \boxed{\sqrt{5 - 2\sqrt2}}$。
6. 旋转 $\triangle APC$ 绕 $A$ 逆 $60^\circ$（$C \to B$），$P \to Q$：$PQ = PA = 5$（等边），$QB = PC = 4$，$\angle AQB = \angle APC = 120^\circ$ → $\angle PQB = 60^\circ$。余弦定理：$PB^2 = 25 + 16 - 2 \cdot 5 \cdot 4 \cos 60^\circ = 41 - 20 = 21$ → $PB = \boxed{\sqrt{21}}$。
7. $D(7,7)$ 关于 $BC$（$x$ 轴）对称 → $D'(7,-7)$。$AE + PE + PD = AE + PE + PD'$。路径 $A \to E(AB \text{ 上}) \to P(BC \text{ 上}) \to D'$ 的最短折线 = 直线 $AD'$（若交点合法）。$A(0,7)$，$D'(7,-7)$：与 $x$ 轴交于 $x = 3.5$（$P$，在 $BC$ 上 ✓）；与 $y$ 轴（$AB$）交于 $A$ 本身 → $E$ 退化取 $A$。最小值 $= AD' = \sqrt{7^2 + 14^2} = \boxed{\sqrt{205} = 7\sqrt5}$。
8. $\cos 120^\circ = -\frac12$：$AB^2 = PA^2 + PB^2 - 2 \cdot PA \cdot PB \cos 120^\circ = 9 + 16 + 12 = 37$；$BC^2 = 16 + 25 + 20 = 61$；$CA^2 = 25 + 9 + 15 = 49$。三边 $\boxed{AB = \sqrt{37},\ BC = \sqrt{61},\ CA = 7}$。
:::

## 本节方法小结

- **旋转的触发器**：等腰直角/正方形 → $90^\circ$；等边/ $60^\circ$ → $60^\circ$；旋转中心选公共顶点
- 旋转三件赠品：**等腰三角形（旋转半径对）**、等边三角形（$60^\circ$ 时）、直角等腰（$90^\circ$ 时）
- 费马点 = **一次旋转 + 两次共线**；$120^\circ + 60^\circ = 180^\circ$ 是共线的全部机关
- 半角模型：$45^\circ$ 使旋转前后两角相等 → SAS 全等 → 折线变直线
- 固定方向固定长度的"强制段"（桥、河）→ **平移消段**，两点连线收尾
