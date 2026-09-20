---
title: 第 5 章 圆与圆幂定理
date: 2026-09-05
tags:
  - 初中数学
  - 奥数
  - 几何
---

# 第 5 章 圆与圆幂定理

> 圆幂定理是"乘积型"线段关系的总纲：**相交弦、切割线、割线定理是同一个定理的三种姿势**——都来自一对相似三角形。四点共圆则是"倒着用"圆周角定理的侦探工具。

## 知识点精讲

### 1. 垂径定理

垂直于弦的直径平分这条弦，并且平分弦所对的两条弧。

**计算公式**（半径 $r$，弦半长 $a$，弦心距 $d$）：

$$a^2 + d^2 = r^2$$

（弦的一半、弦心距、半径构成直角三角形——垂径定理的所有计算题都是这半个勾股。）

### 2. 圆周角定理

同弧所对圆周角等于圆心角的一半；同弧（等弧）所对圆周角相等；**直径所对的圆周角是直角**（反用可证"某点在圆上"）。

### 3. 圆幂定理（三种形态，一个本质）

设 $P$ 是圆外或圆内一点，过 $P$ 的两条线与圆交于若干点：

| 形态 | 图形 | 结论 |
|------|------|------|
| 相交弦定理 | $P$ 在圆内，两弦 $AB$、$CD$ 交于 $P$ | $PA \cdot PB = PC \cdot PD$ |
| 割线定理 | $P$ 在圆外，两条割线 $PAB$、$PCD$ | $PA \cdot PB = PC \cdot PD$ |
| 切割线定理 | $P$ 在圆外，切线 $PA$ + 割线 $PCD$ | $PA^2 = PC \cdot PD$ |

**统一理解**：$P$ 对圆的"幂"是定值——圆内是负向乘积，圆外是正向乘积。全部由**公共角 + 对顶角/弦切角**的一对相似三角形导出。

### 4. 四点共圆判定（侦探工具）

- **对角互补**：四边形两组对角和均为 $180^\circ$（或一组对角互补 + 凸性）→ 四点共圆
- **同侧等角**：$C, D$ 在线段 $AB$ 同侧且 $\angle ACB = \angle ADB$ → $A, B, C, D$ 共圆

**用途反向**：证出四点共圆后，圆周角定理免费赠送一堆角相等。

### 5. 托勒密定理（选讲）

圆内接四边形 $ABCD$：两条对角线之积 = 两组对边乘积之和：

$$AC \cdot BD = AB \cdot CD + AD \cdot BC$$

## 经典例题

### 例 1（经典赛题改编）

圆的半径为 10，弦 $AB = 16$。求圆心 $O$ 到 $AB$ 的距离，以及弓形高（弧 $AB$ 中点到弦 $AB$ 的距离，取劣弧侧）。

::: details 查看解答

弦心距：$\sqrt{10^2 - 8^2} = \boxed{6}$。

弓形高 $= r - d = 10 - 6 = \boxed{4}$。

**方法提炼：** 垂径定理 = "半径、半弦、弦心距"的勾股三元组，弓形高 = 半径 − 弦心距（劣弧侧）或 半径 + 弦心距（优弧侧）。
:::

### 例 2（经典赛题改编·切割线定理）

$PA$ 切 $\odot O$ 于 $A$，割线 $PBC$ 依次交圆于 $B, C$，$PB = 4$，$BC = 12$。求 $PA$ 与 $AB$ 上的…… 求 $PA$。

::: details 查看解答

$PC = PB + BC = 16$。由切割线定理：

$$PA^2 = PB \cdot PC = 4 \times 16 = 64 \Rightarrow PA = \boxed{8}$$

**方法提炼：** 切割线 = "切线是割线的几何平均"（$\sqrt{4 \times 16} = 8$——又是 $\sqrt{xy}$ 结构，与梯形蝴蝶、射影定理一脉相承）。
:::

### 例 3（经典赛题改编·相交弦定理）

$\odot O$ 中弦 $AB$、$CD$ 交于 $P$，$PA = 6$，$PB = 4$，$PC = 3$。求 $CD$。

::: details 查看解答

$$PA \cdot PB = PC \cdot PD \Rightarrow 6 \times 4 = 3 \times PD \Rightarrow PD = 8$$

$CD = PC + PD = \boxed{11}$。

**方法提炼：** 相交弦 = 圆内版圆幂；四段中已知三段即可解第四段——先解 $PD$ 再算全长，别把 $PD$ 当成 $CD$。
:::

### 例 4（经典赛题改编·割线定理）

$P$ 是 $\odot O$ 外一点，两条割线 $PAB$、$PCD$（$A, B$ 与 $C, D$ 为交点，近点在前），$PA = 3$，$AB = 5$，$PC = 4$。求 $CD$。

::: details 查看解答

$PB = PA + AB = 8$。由割线定理：

$$PA \cdot PB = PC \cdot PD \Rightarrow 3 \times 8 = 4 \times PD \Rightarrow PD = 6 \Rightarrow CD = PD - PC = \boxed{2}$$

**方法提炼：** 割线定理与相交弦公式相同，区别只在"交点在圆外 → 远点 − 近点 = 弦长"。
:::

### 例 5（初中联赛风格·双四点共圆）

$\triangle ABC$ 中，$BD \perp AC$ 于 $D$，$CE \perp AB$ 于 $E$，两高交于 $H$。求证：

（1）$B, C, D, E$ 四点共圆；
（2）$A, E, H, D$ 四点共圆，且 $\angle EHD = 180^\circ - \angle A$。

::: details 查看解答

**（1）** $\angle BEC = \angle BDC = 90^\circ$（$E, D$ 分别是两条高线的垂足）。

四边形 $BCDE$ 中 $\angle BEC + \angle BDC = 180^\circ$（对角互补）→ $B, C, D, E$ 共圆。$\blacksquare$

**（2）** $\angle AEH = 90^\circ$（$CE \perp AB$），$\angle ADH = 90^\circ$（$BD \perp AC$）。

四边形 $AEHD$ 中 $\angle AEH + \angle ADH = 180^\circ$ → $A, E, H, D$ 共圆。

该圆中 $\angle AEH + \angle ADH$ 对角互补已知，另一组对角：$\angle EHD + \angle EAD = 180^\circ$，而 $\angle EAD = \angle A$ →

$$\angle EHD = 180^\circ - \angle A \qquad \blacksquare$$

**方法提炼：** 两条高制造**两对直角**——对角互补判定的免费素材。垂足四边形（$BCDE$）共圆是"高线家族"的标准结论，值得直接记住。
:::

### 例 6（初中联赛风格·托勒密定理应用）

$P$ 是正三角形 $ABC$ 外接圆的弧 $BC$ 上一点（不与 $B, C$ 重合）。求证：$PA = PB + PC$。

::: details 查看解答

$A, B, P, C$ 四点共圆（都在外接圆上），按圆上顺序 $A, B, P, C$，对角线为 $AP$ 与 $BC$。

由托勒密定理：

$$AP \cdot BC = AB \cdot PC + AC \cdot PB$$

正三角形：$AB = AC = BC = a$：

$$AP \cdot a = a \cdot PC + a \cdot PB \Rightarrow AP = PC + PB \qquad \blacksquare$$

**方法提炼：** 托勒密在"正多边形 + 圆上动点"场景威力巨大——对边乘积自动因相等而合并。此结论（$PA = PB + PC$）是"一条线段 = 两段之和"的圆上版本，与截长补短形成呼应。
:::

## 习题

1. 圆的半径 13，一条弦长 24，求弦心距。
2. $\odot O$ 中，弦 $AB$ 的长等于半径，求弦 $AB$ 所对的圆周角。
3. $PA$ 切 $\odot O$ 于 $A$，割线 $PBC$，$PB = 5$，$PA = 10$。求 $BC$。
4. 弦 $AB \perp CD$ 于 $P$，$PA = PB = 4\sqrt2$？改为：$PA = 6$，$PB = 2$，$PC = 3$。求圆的半径。（提示：先求 $PD$，再用"相交弦 + 半径"勾股，或注意到 $P$ 到圆心距离与幂的关系）
5. 圆内接四边形 $ABCD$ 中 $\angle A = 70^\circ$，$\angle B = 85^\circ$。求 $\angle C$、$\angle D$。
6. $\triangle ABC$ 中 $AB = AC$，$D$ 是 $BC$ 上一点，$DE \perp AB$ 于 $E$，$DF \perp AC$ 于 $F$？改为四点共圆题：$\triangle ABC$ 中 $\angle A = 50^\circ$，高 $BD$、$CE$ 交于 $H$，求 $\angle AHD$ 与 $\angle BHC$。
7. 正方形 $ABCD$ 边长为 1，$P$ 是弧 $AB$（劣弧）上一点。用托勒密定理证明：$PC = \sqrt2\,PB + PA$。（提示：对圆上顺序为 $B, P, A, C$ 的四边形应用托勒密，注意对角线是 $BA$——它是一条**边**，长为 1）
8.（压轴）$\odot O$ 的半径为 5，$P$ 是圆外一点，$PA$ 切圆于 $A$ 且 $PA = 12$。过 $P$ 的割线交圆于 $B, C$（$B$ 近 $C$ 远），且 $BC = 7$。求 $PB$，并求 $PC$。（两问之间互为验证）

::: details 习题答案与提示

1. $\sqrt{13^2 - 12^2} = \boxed{5}$。
2. 设半径 $r$：$\triangle OAB$ 等边（$OA = OB = AB = r$）→ 圆心角 $60^\circ$ → 圆周角 $30^\circ$（劣弧）或 $150^\circ$（优弧）。答案 $\boxed{30^\circ \text{ 或 } 150^\circ}$。
3. 由切割线定理 $PA^2 = PB \cdot PC$ → $100 = 5 \cdot PC$ → $PC = 20$ → $BC = \boxed{15}$。
4. 先解 $PD$：$PA \cdot PB = PC \cdot PD$ → $12 = 3 \cdot PD$ → $PD = 4$。于是 $AB = 8$，$CD = 7$。设圆半径 $r$、$OP = x$，$M$、$N$ 分别为 $AB$、$CD$ 的中点：$OM^2 = r^2 - 16$，$ON^2 = r^2 - 12.25$。由 $AB \perp CD$ 知 $OM \parallel CD$、$ON \parallel AB$ → $\angle MON = 90°$ → $OP^2 = OM^2 + ON^2 = 2r^2 - 28.25$。又由圆幂：$r^2 - OP^2 = PA \cdot PB = 12$。联立：$r^2 - 12 = 2r^2 - 28.25$ → $r^2 = \dfrac{65}{4}$ → $r = \boxed{\dfrac{\sqrt{65}}{2}}$（$OP^2 = 4.25$，$P$ 在圆内 ✓）。
5. 对角互补：$\angle C = 180^\circ - 70^\circ = \boxed{110^\circ}$，$\angle D = 180^\circ - 85^\circ = \boxed{95^\circ}$。
6. $\angle AHD = 180^\circ - \angle A = \boxed{130^\circ}$（例 5 结论）；$\angle BHC = \angle A = \boxed{50^\circ}$（对顶角或同理由）。
7. 圆上顺序为 $B, P, A, C$（$P$ 在弧 $AB$ 上），对四边形 $BPAC$ 用托勒密：对角线为 $BA$ 与 $PC$，对边为 $BP$ 与 $AC$、$PA$ 与 $CB$。注意 $BA = 1$ 是正方形的**边**，$AC = \sqrt2$ 是对角线，$CB = 1$：

$$BA \cdot PC = BP \cdot AC + PA \cdot CB \Rightarrow 1 \cdot PC = \sqrt2\,PB + PA \qquad \blacksquare$$

（数值自检：$P$ 取弧中点时 $PB = PA \approx 0.541$，$PC \approx 0.541(\sqrt2 + 1) \approx 1.307$，与坐标计算一致。）
8. 压轴：$PA^2 = PB \cdot PC = PB(PB + 7)$ → $PB^2 + 7PB - 144 = 0$ → $PB = \dfrac{-7 + 25}{2} = \boxed{9}$，$PC = PB + 7 = \boxed{16}$。（互验：$\sqrt{9 \times 16} = 12 = PA$ ✓）
