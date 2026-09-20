---
title: 第 4 章 相似三角形进阶
date: 2026-09-05
tags:
  - 初中数学
  - 奥数
  - 几何
---

# 第 4 章 相似三角形进阶

> 相似的本质是**按比例缩放**。课内学判定，竞赛考的是**模型识别**：A 字型、8 字型、一线三等角、母子相似——看见图形特征就能自动匹配相似对，是本章的训练目标。

## 知识点精讲

### 1. 判定与性质速查

**判定**：AA（两角）、SAS（两边夹角成比例）、SSS（三边成比例）。

**性质**：对应边成比例（比 = 相似比 $k$）；对应高、中线、角平分线之比 $= k$；**面积比 $= k^2$**；周长比 $= k$。

### 2. 四大基本模型

| 模型 | 图形特征 | 相似对 |
|------|---------|--------|
| **A 字型** | 平行线截两边（$DE \parallel BC$） | $\triangle ADE \sim \triangle ABC$ |
| **8 字型（X 型）** | 两线交于 $O$ 且端点连线平行 | $\triangle AOB \sim \triangle COD$ |
| **一线三等角（K 型）** | 一条直线上三个相等的角 | 两侧三角形相似 |
| **母子相似** | 直角三角形斜边上的高 | $\triangle ACD \sim \triangle CBD \sim \triangle CBA$ |

**一线三等角的灵魂**：$\angle B = \angle ACD = \angle E$ 且 $B, C, D$ 共线 → $\angle BAD = \angle CDE$（各减去中间那个角）→ $\triangle ABD \sim \triangle DCE$。**三垂直**（都为 $90^\circ$）是最常用的特例。

### 3. 母子相似（射影定理）

$Rt\triangle ABC$ 中 $\angle ACB = 90^\circ$，$CD \perp AB$ 于 $D$：

$$CD^2 = AD \cdot DB, \qquad AC^2 = AD \cdot AB, \qquad BC^2 = BD \cdot AB$$

三条公式全部来自 $\triangle ACD \sim \triangle CBD$ 等三对相似——**建议现场推一遍，比背快**。

### 4. 双解陷阱：同一个条件两种相似

"在 $AB$ 上找 $E$ 使 $\triangle ADE$ 与 $\triangle ABC$ 相似"——对应关系不唯一时**必须分两种**（见例 2 / 习题 6）。

## 经典例题

### 例 1（经典赛题改编·A 字型）

$DE \parallel BC$ 交 $AB, AC$ 于 $D, E$，$AD : DB = 2 : 3$，$S_{\triangle ADE} = 8$。求 $S_{\triangle ABC}$。

::: details 查看解答

$AD : AB = 2 : 5$ → 相似比 $k = \frac25$ → 面积比 $= \frac{4}{25}$：

$$S_{\triangle ABC} = 8 \times \frac{25}{4} = \boxed{50}$$

**方法提炼：** "给了线段比给面积"先换算成**相似比**（对全长），再平方。$AD:DB$ 与 $AD:AB$ 一字之差，答案天差地别。
:::

### 例 2（经典赛题改编·母子相似）

$\triangle ABC$ 中，$D$ 在 $BC$ 上，$\angle BAD = \angle C$，$AB = 4$，$BD = 3$。求 $BC$。

::: details 查看解答

$\triangle BAD$ 与 $\triangle BCA$：$\angle B$ 公共，$\angle BAD = \angle C$ → **AA 相似**（$\triangle BAD \sim \triangle BCA$，注意顶点对应 $A \leftrightarrow C$）。

$$\frac{AB}{CB} = \frac{BD}{BA} \Rightarrow AB^2 = BD \cdot BC \Rightarrow 16 = 3 \cdot BC \Rightarrow BC = \boxed{\frac{16}{3}}$$

**方法提炼：** "一边平方 = 公共边 × 另一边"是 $\angle BAD = \angle C$ 型的标志结论（射影定理的"斜置版"）。对应顶点顺序写对，比例才不会错位。
:::

### 例 3（经典赛题改编·射影定理数值）

$Rt\triangle ABC$ 中 $\angle ACB = 90^\circ$，$CD \perp AB$ 于 $D$，$AD = 4$，$DB = 9$。求 $CD$ 与 $AC$。

::: details 查看解答

$$CD^2 = AD \cdot DB = 36 \Rightarrow CD = \boxed{6}$$

$$AC^2 = AD \cdot AB = 4 \times 13 = 52 \Rightarrow AC = \boxed{2\sqrt{13}}$$

**方法提炼：** 三条射影公式免推直接用；$CD$ 是 $AD$ 与 $DB$ 的**几何平均**——与梯形蝴蝶定理的 $\sqrt{xy}$ 结构遥相呼应。
:::

### 例 4（经典赛题改编·一线三垂直）

$D$ 在线段 $BC$ 上，$\angle B = \angle ADE = \angle C$，$AB = 4$，$BD = 2$，$CD = 1$。求 $DE$。

::: details 查看解答

**识别模型**：一线三等角（$B, D, C$ 共线，$\angle B = \angle ADE = \angle C$）。

证 $\triangle ABD \sim \triangle DCE$：

- $\angle B = \angle C$ ✓
- $\angle BAD = \angle CDE$：$\angle ADB = \angle BAD + \angle B$（外角）……直接用"减法"：$\angle CDE = 180^\circ - \angle ADE - \angle ADB = 180^\circ - \angle B - \angle ADB = \angle BAD$ ✓

相似比：$\dfrac{AB}{DC} = \dfrac{4}{1}$，对应边 $AD \leftrightarrow DE$：

$$\frac{AD}{DE} = \frac{AB}{DC} = 4$$

$AD = \sqrt{AB^2 + BD^2} = \sqrt{16+4} = 2\sqrt5$（$Rt\triangle ABD$，因 $\angle B$ 未必是 $90^\circ$——若非直角需另求。此处 $\angle B = \angle ADE$ 且 $\angle ADE = 90^\circ$，故 $\angle B = 90^\circ$，可用勾股）→

$$DE = \frac{2\sqrt5}{4} = \boxed{\frac{\sqrt5}{2}}$$

**方法提炼：** 三等角模型里**中间那个角决定了两侧直角**（$\angle ADE = 90^\circ$ 传染给 $\angle B$、$\angle C$），勾股定理随之合法进场。
:::

### 例 5（希望杯风格·一线三垂直）

等腰 $Rt\triangle ABC$，$\angle ACB = 90^\circ$，$AC = BC$，$D$ 是斜边 $AB$ 上一点，$DE \perp BC$ 于 $E$，$DF \perp AC$ 于 $F$。求证：（1）$\triangle BDE$ 与 $\triangle ADF$ 均为等腰直角三角形；（2）矩形 $DECF$ 的周长为定值。

::: details 查看解答

**（1）** $\angle B = \angle A = 45^\circ$（等腰直角三角形底角）。

$DE \perp BC$ → $Rt\triangle BDE$ 中 $\angle B = 45^\circ$ → $\angle BDE = 45^\circ$ → **等腰直角**，$BE = DE$。

$DF \perp AC$ → 同理 $Rt\triangle ADF$ 中 $\angle A = 45^\circ$ → **等腰直角**，$AF = DF$。$\blacksquare$

**（2）** 设 $AC = BC = a$。由（1）：$BE = DE$，$AF = DF$。

矩形 $DECF$：$CF = DE$，$CE = DF$（对边相等）。

$$\text{周长} = 2(DE + DF) = 2(CF + CE)$$

而 $BC = BE + EC = DE + CE = a$，所以

$$DE + DF = DE + CE = a \Rightarrow \text{周长} = 2a \qquad \blacksquare$$

**定值 = 2 倍边长，与 $D$ 的位置无关。**

**方法提炼：** 一线三垂直 + 等腰直角 → **两个小三角形自动等腰直角**（$45^\circ$ 传染）；"定值"的来源是 $DE + DF$ 恰好填补 $BC$ 边——这种"两段拼一段"的结构是定值题的典型信号。
:::

### 例 6（初中联赛风格·双解讨论）

$\triangle ABC$ 中，$AB = 9$，$AC = 6$，$D$ 在 $AC$ 上且 $AD = 2$。在 $AB$ 上取点 $E$，使 $\triangle ADE$ 与 $\triangle ABC$ 相似，求 $AE$。

::: details 查看解答

$\angle A$ 公共 → 按 SAS 相似，$AD$ 的对应边有两种可能：

**情形一**：$AD$ 对应 $AB$（$\triangle ADE \sim \triangle ABC$）：

$$\frac{AD}{AB} = \frac{AE}{AC} \Rightarrow \frac{2}{9} = \frac{AE}{6} \Rightarrow AE = \boxed{\frac{4}{3}}$$

**情形二**：$AD$ 对应 $AC$（$\triangle ADE \sim \triangle ACB$）：

$$\frac{AD}{AC} = \frac{AE}{AB} \Rightarrow \frac{2}{6} = \frac{AE}{9} \Rightarrow AE = \boxed{3}$$

两解都合法（$E$ 都在 $AB$ 内部）。

**方法提炼：** "公共角 + 一条定边"的相似构造**必双解**——对应边选谁。竞赛阅卷按双解给分，漏解丢一半。
:::

## 习题

1. $DE \parallel BC$，$AD : AB = 2 : 5$，$S_{\triangle ADE} = 12$。求 $S_{\triangle ABC}$。
2. $\triangle ABC$ 中 $D$ 在 $BC$ 上，$\angle BAD = \angle C$，$AB = 6$，$BD = 4$。求 $BC$。
3. $Rt\triangle$ 中斜边上的高把斜边分成 3 和 12 两段，求这条高与两条直角边。
4. $\triangle ABC$ 中，$D$ 在 $BC$ 上，$\angle BAD = \angle C$，$AB = 8$，$AC = 6$，$CB = 12$。求 $AD$ 与 $BD$。
5. 梯形 $ABCD$，$AD \parallel BC$，对角线交于 $O$，$AD = 4$，$BC = 12$，$S_{\triangle AOD} = 8$。求 $S_{\triangle BOC}$。
6. $\triangle ABC$ 中 $AB = 9$，$AC = 6$，$D$ 在 $AC$ 上 $AD = 2$，$E$ 在 $AB$ 上使 $\triangle ADE \sim \triangle ABC$（对应顺序已给定）。求 $AE$。
7. $D$ 在 $BC$ 上，$\angle B = \angle ADE = \angle C$，$AB = 6$，$BD = 3$，$DC = 2$。求 $DE$。
8.（压轴）正方形 $ABCD$，$E$ 在 $BC$ 上，$F$ 在 $CD$ 上，$\angle EAF = 45^\circ$，$BE = 3$，$DF = 2$。求正方形的边长。（提示：设边长 $x$，用 $\tan$ 表示 $\angle BAE$ 与 $\angle DAF$，由 $\angle BAE + \angle DAF = 45^\circ$ 列方程；纯几何的旋转构造法见第 6 章）

::: details 习题答案与提示

1. $k = \frac25$，面积比 $\frac{4}{25}$ → $S_{\triangle ABC} = 12 \times \frac{25}{4} = \boxed{75}$。
2. $\triangle BAD \sim \triangle BCA$ → $AB^2 = BD \cdot BC$ → $36 = 4 \cdot BC$ → $BC = \boxed{9}$。
3. 高 $= \sqrt{3 \times 12} = \boxed{6}$；直角边 $= \sqrt{3 \times 15} = 3\sqrt5$ 与 $\sqrt{12 \times 15} = 6\sqrt5$。
4. $\triangle BAD \sim \triangle BCA$（$\angle B$ 公共 + $\angle BAD = \angle C$）→ $\dfrac{AB}{CB} = \dfrac{BD}{BA} = \dfrac{AD}{CA}$：$BD = \dfrac{AB^2}{CB} = \dfrac{64}{12} = \boxed{\dfrac{16}{3}}$；$AD = \dfrac{AB \cdot AC}{CB} = \dfrac{48}{12} = \boxed{4}$。
5. $\triangle AOD \sim \triangle COB$，相似比 $4:12 = 1:3$，面积比 $1:9$ → $S_{\triangle BOC} = \boxed{72}$。
6. 双解：$\dfrac{AD}{AB} = \dfrac{AE}{AC} \Rightarrow AE = \dfrac43$；或 $\dfrac{AD}{AC} = \dfrac{AE}{AB} \Rightarrow AE = 3$。答案 $\boxed{\dfrac43 \text{ 或 } 3}$。
7. $\triangle ABD \sim \triangle DCE$（一线三等角）→ $\dfrac{AB}{DC} = \dfrac{AD}{DE} = \dfrac{BD}{CE}$。$AD = \sqrt{6^2 + 3^2} = 3\sqrt5$（$\angle B = 90^\circ$，因 $\angle ADE = 90^\circ$）→ $\dfrac{6}{2} = \dfrac{3\sqrt5}{DE} \Rightarrow DE = \boxed{\sqrt5}$。
8. 设边长 $x$。$\tan\angle BAE = \dfrac3x$，$\tan\angle DAF = \dfrac2x$，$\angle BAE + \angle DAF = 90^\circ - 45^\circ = 45^\circ$：

$$\tan(\alpha + \beta) = \frac{\frac3x + \frac2x}{1 - \frac6{x^2}} = 1 \Rightarrow 5x = x^2 - 6 \Rightarrow x^2 - 5x - 6 = 0 \Rightarrow x = \boxed{6} \ (x = -1 \text{ 舍})$$

验证：$EF = \sqrt{(6-3)^2 + (6-2)^2} = 5 = BE + DF$ ✓（半角模型结论自洽）。
:::

## 本节方法小结

- 线段比 → 相似比 → **面积比平方**，三步换算别跳步
- $\angle BAD = \angle C$（斜置自相似）→ $AB^2 = BD \cdot BC$，母子相似的变装
- **一线三等角**：中间角决定两边角；三垂直时勾股自动进场
- 射影定理三条 = 三个相似对，$CD = \sqrt{AD \cdot DB}$（几何平均结构）
- "公共角 + 定边"构造相似**必双解**
- 复杂图形 = 多个基本模型的接力，**一次只咬一个模型**
