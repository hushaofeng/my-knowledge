---
title: 第 3 章 面积问题与等积变形
date: 2026-09-05
tags:
  - 初中数学
  - 奥数
  - 几何
---

# 第 3 章 面积问题与等积变形

> 面积不只是"算大小"的工具，更是**证明线段关系的武器**（面积法）。本章四大模型：同高比底、**燕尾定理**、**共角（鸟头）模型**、梯形蝴蝶定理——全都是"面积比 ⟺ 线段比"的不同化身。

## 知识点精讲

### 1. 面积比的两条基本原理

**原理一（同高比底）**：两个三角形若高相同，面积比 = 底之比。

$$D \text{ 在 } BC \text{ 上}：\frac{S_{\triangle ABD}}{S_{\triangle ACD}} = \frac{BD}{DC}$$

**原理二（同底比高）**：底相同，面积比 = 高之比；**等底等高则面积相等**（平行线间等积变形的根基）。

### 2. 燕尾定理

$P$ 为 $\triangle ABC$ 内一点，$AP$ 延长线交 $BC$ 于 $D$，则

$$\frac{S_{\triangle PAB}}{S_{\triangle PAC}} = \frac{BD}{DC}$$

证明骨架：$\dfrac{S_{\triangle PAB}}{S_{\triangle PAC}} = \dfrac{S_{\triangle DAB} - S_{\triangle DAP}}{S_{\triangle DAC} - S_{\triangle DAP}}$？——直接写标准证：以 $AB$、$AC$ 为公共底边两两作比再相除（见例 2）。

**用途**：把"面积比"翻译成"线段比"，双向通行。

### 3. 共角（鸟头）模型

$\triangle ADE$ 与 $\triangle ABC$ 共享 $\angle A$（或互补），则

$$\frac{S_{\triangle ADE}}{S_{\triangle ABC}} = \frac{AD}{AB} \cdot \frac{AE}{AC}$$

推导：$S = \dfrac12 \, AB \cdot AC \cdot \sin A$（竞赛允许用正弦面积公式；不用正弦也可用"放缩两次"证）。

### 4. 梯形蝴蝶定理（梯形对角线分成的四块）

梯形 $ABCD$（$AD \parallel BC$），对角线交于 $O$：

1. **左右相等**：$S_{\triangle AOB} = S_{\triangle DOC}$（同底 $BC$ 的 $\triangle ABC$ 与 $\triangle DBC$ 等积，减去公共 $\triangle OBC$）
2. **中间是几何平均**：$S_{\triangle AOB} = \sqrt{S_{\triangle AOD} \cdot S_{\triangle BOC}}$
3. **上下比 = 相似比平方**：$\dfrac{S_{\triangle AOD}}{S_{\triangle BOC}} = \left(\dfrac{AD}{BC}\right)^2$

## 经典例题

### 例 1（经典赛题改编）

$\triangle ABC$ 的面积为 24，$D$ 在 $BC$ 上且 $BD : DC = 1 : 2$，$E$ 在 $AD$ 上且 $AE : ED = 1 : 2$。求 $\triangle EBD$ 的面积。

::: details 查看解答

$S_{\triangle ABD} = 24 \times \dfrac{1}{1+2} = 8$（同高比底）。

$\triangle EBD$ 与 $\triangle ABD$ 共底 $BD$，高之比 $= ED : AD = 2 : 3$：

$$S_{\triangle EBD} = 8 \times \frac23 = \boxed{\frac{16}{3}}$$

**方法提炼：** 两条 cevian（顶点到对边的线段）各自产生一个"面积比"，**乘起来**即可——这是处理复合分割的标准流程。
:::

### 例 2（初中联赛风格）

证明燕尾定理：$P$ 为 $\triangle ABC$ 内一点，$AP$ 交 $BC$ 于 $D$，则 $\dfrac{S_{\triangle PAB}}{S_{\triangle PAC}} = \dfrac{BD}{DC}$。

::: details 查看解答

以 $AB$ 为公共底边看 $\triangle PAB$ 与 $\triangle DAB$（$P, D$ 在 $AB$ 同侧），高之比 = $P, D$ 到 $AB$ 的距离之比；由 $P$ 在 $AD$ 上，两距离之比 $= AP : AD$：

$$\frac{S_{\triangle PAB}}{S_{\triangle DAB}} = \frac{AP}{AD}, \qquad \frac{S_{\triangle PAC}}{S_{\triangle DAC}} = \frac{AP}{AD}$$

两式相除（$\dfrac{S_{\triangle PAB}}{S_{\triangle PAC}} = \dfrac{S_{\triangle DAB}}{S_{\triangle DAC}}$），再用同高比底：

$$\frac{S_{\triangle PAB}}{S_{\triangle PAC}} = \frac{S_{\triangle DAB}}{S_{\triangle DAC}} = \frac{BD}{DC} \qquad \blacksquare$$

**方法提炼：** 关键一步是"**同比值传递**"：两个三角形分别与以 $AD$ 为参照的三角形作比，比值都是 $\frac{AP}{AD}$，相除即得。这个技巧叫"**借比例**"。
:::

### 例 3（经典赛题改编）

证明：三角形的三条中线把它分成面积相等的 6 个部分。

::: details 查看解答

设三条中线交于 $G$（重心），$AD$ 是 $BC$ 边中线。

- $D$ 是 $BC$ 中点 → $S_{\triangle ABD} = S_{\triangle ACD} = \frac12 S_{\triangle ABC}$（同高比底）
- $G$ 在 $AD$ 上：$AG : GD = 2 : 1$（重心性质）→ $S_{\triangle GBD} = \frac13 S_{\triangle ABD} = \frac16 S_{\triangle ABC}$（共底 $BD$，高比 $= GD : AD$）

同理，对每条中线：每条中线被重心分出的"下方小三角形"（如 $\triangle GBD$、$\triangle GCD$、$\triangle GCE$、…）面积都是 $\frac16 S$。

6 个小三角形两两拼在三条中线下方各占一半、共 6 块，每块 $\frac16$。$\blacksquare$

**方法提炼：** "中线三等分点"（重心 $AG:GD = 2:1$）+ 同高比底 = 六等分。重心分中线 $2:1$ 是免费的高级货，值得记住。
:::

### 例 4（经典赛题改编）

长方形 $ABCD$ 内一点 $P$，连接 $PA, PB, PC, PD$。求证：$S_{\triangle PAB} + S_{\triangle PCD} = \dfrac12 S_{ABCD}$。

::: details 查看解答

设 $AB = CD = a$（对边），$P$ 到 $AB$ 的距离 $h_1$，到 $CD$ 的距离 $h_2$。

由长方形对边平行：$h_1 + h_2 = $ 两平行线间距离 $= AD$。

$$S_{\triangle PAB} + S_{\triangle PCD} = \frac12 a h_1 + \frac12 a h_2 = \frac12 a (h_1 + h_2) = \frac12 \cdot a \cdot AD = \frac12 S_{ABCD} \qquad \blacksquare$$

**方法提炼：** "点到一组对边，距离之和 = 两平行线距离"是矩形/平行四边形内点问题的万能钥匙。
:::

### 例 5（希望杯风格·鸟头模型应用）

$\triangle ABC$ 中，$D$ 在 $AB$ 上且 $AD : DB = 1 : 2$，$E$ 在 $AC$ 上且 $AE : EC = 2 : 3$。求 $S_{\triangle ADE} : S_{\triangle ABC}$。

::: details 查看解答

共角 $\angle A$，由鸟头模型：

$$\frac{S_{\triangle ADE}}{S_{\triangle ABC}} = \frac{AD}{AB} \cdot \frac{AE}{AC} = \frac{1}{3} \times \frac{2}{5} = \boxed{\frac{2}{15}}$$

**方法提炼：** 鸟头 = **两个比例相乘**（一条边一个比例）。看图形是否"共享一个角"是识别标志。
:::

### 例 6（初中联赛风格·蝴蝶定理数值）

梯形 $ABCD$ 中 $AD \parallel BC$，$AD = 4$，$BC = 9$，对角线交于 $O$。求 $S_{\triangle AOD} : S_{\triangle AOB} : S_{\triangle BOC}$。

::: details 查看解答

$AD \parallel BC$ → $\triangle AOD \sim \triangle COB$，相似比 $4 : 9$。

- 面积比（平方比）：$S_{\triangle AOD} : S_{\triangle BOC} = 16 : 81$
- 蝴蝶中间块：$S_{\triangle AOB} = \sqrt{S_{\triangle AOD} \cdot S_{\triangle BOC}}$ → 若 $S_{\triangle AOD} = 16k$，$S_{\triangle BOC} = 81k$，则 $S_{\triangle AOB} = \sqrt{16 \times 81}\,k = 36k$

$$S_{\triangle AOD} : S_{\triangle AOB} : S_{\triangle BOC} = \boxed{16 : 36 : 81}$$

**方法提炼：** 记住结构 $AD^2 : (AD \cdot BC) : BC^2$——三个比是"上下底的平方、乘积"家族，与 $\sqrt{xy}$ 的几何平均结构一脉相承（呼应数论模块的均值不等式）。
:::

## 习题

1. $\triangle ABC$ 面积 30，$D$ 在 $BC$ 上且 $BD : DC = 2 : 3$，求 $S_{\triangle ABD}$。
2. $\triangle ABC$ 中 $D$ 是 $BC$ 中点，$E$ 在 $AD$ 上。已知 $S_{\triangle EBD} = 3$，且 $S_{\triangle ABD} = 9$，求 $AE : ED$。
3. 平行四边形 $ABCD$ 内一点 $P$，证明：$S_{\triangle PAB} + S_{\triangle PCD} = \dfrac12 S_{ABCD}$。
4. 梯形对角线分成的四块中，$S_{\triangle AOD} = 4$，$S_{\triangle BOC} = 9$。求梯形总面积。
5. $\triangle ABC$ 中，$D$ 在 $AB$ 上 $AD : DB = 2 : 3$，$E$ 在 $AC$ 上 $AE : EC = 1 : 4$。求 $S_{\triangle ADE} : S_{\triangle BDEC}$（注意求的是与四边形之比）。
6. 用面积法证明角平分线定理：$AD$ 平分 $\angle BAC$ 交 $BC$ 于 $D$，则 $\dfrac{BD}{DC} = \dfrac{AB}{AC}$。（提示：$S_{\triangle ABD} : S_{\triangle ACD}$ 用两种方式各算一次）
7. 正方形 $ABCD$ 边长为 4，$P$ 在正方形内部，$S_{\triangle PAB} = 3$。求 $P$ 到 $CD$ 的距离。
8.（压轴）$\triangle ABC$ 的面积为 1，$D$ 在 $BC$ 上且 $BD : DC = 2 : 3$，$E$ 在 $AD$ 上且 $S_{\triangle ABE} : S_{\triangle EBD} = 1 : 2$。连接 $CE$，求 $S_{\triangle AEC}$。

::: details 习题答案与提示

1. $30 \times \dfrac{2}{5} = \boxed{12}$。
2. 共底 $BD$：高比 = 面积比 → $ED : AD = S_{\triangle EBD} : S_{\triangle ABD} = 3 : 9 = 1 : 3$ → $AE : ED = \boxed{2 : 1}$。
3. 同例 4（$h_1 + h_2 = $ 两平行线间距离；$\triangle PCD$ 的底换成 $CD = AB$）。
4. $S_{\triangle AOB} = \sqrt{4 \times 9} = 6$，$S_{\triangle COD} = 6$。总面积 $= 4 + 9 + 6 + 6 = \boxed{25}$。
5. 鸟头：$S_{\triangle ADE}/S_{\triangle ABC} = \frac23 \times \frac15 = \frac{2}{15}$ → 四边形占 $\frac{13}{15}$ → 比 $= \dfrac{2}{13}$。
6. $S_{\triangle ABD} : S_{\triangle ACD} = BD : DC$（同高）；又 $= \dfrac{\frac12 AB \cdot AD \sin\angle BAD}{\frac12 AC \cdot AD \sin\angle DAC} = \dfrac{AB}{AC}$（$\angle BAD = \angle DAC$）。两式相等 → $\dfrac{BD}{DC} = \dfrac{AB}{AC}$。
7. $P$ 到 $AB$ 的距离 $h_1$：$3 = \frac12 \times 4 \times h_1 \Rightarrow h_1 = 1.5$。$P$ 到 $CD$ 的距离 $= 4 - 1.5 = \boxed{2.5}$（与例 4 同构：到对边距离之和 = 边长）。
8. $S_{\triangle ABD} = \frac25$。$S_{\triangle ABE} : S_{\triangle EBD} = 1 : 2$ 且共底 $BE$ → 面积比 = 到 $BE$ 的距离比……更直接：共底 $BD$？$\triangle ABE$ 与 $\triangle EBD$ 不共底。用 $AD$ 上的分割：$S_{\triangle ABE} + S_{\triangle EBD} = S_{\triangle ABD} = \frac25$，且比 $1:2$ → $S_{\triangle ABE} = \frac{2}{15}$，$S_{\triangle EBD} = \frac{4}{15}$。共底 $BD$：$S_{\triangle EBD} : S_{\triangle ABD} = 4 : 10 = ED : AD$ → $AE : ED = 6 : 4 = 3 : 2$。$S_{\triangle AEC}$：共底 $AC$？$\triangle AEC$ 与 $\triangle ACD$：$ED : AD = 2 : 5$ → $S_{\triangle ECD} = \frac25 \times \frac35 = \frac{6}{25}$？认真：$S_{\triangle ECD} = S_{\triangle ACD} \times \frac{ED}{AD} = \frac35 \times \frac25 = \frac{6}{25}$（$S_{\triangle ACD} = \frac35$）。$AE : ED = 3:2$ → $S_{\triangle AEC} = \frac{3}{2} S_{\triangle ECD} = \frac{3}{2} \times \frac{6}{25} = \boxed{\dfrac{9}{25}}$（验证：$S_{\triangle AEC} = S_{\triangle ACD} - S_{\triangle ECD} = \frac35 - \frac{6}{25} = \frac{15-6}{25} = \frac{9}{25}$ ✓）。
:::

## 本节方法小结

- 面积比 ⟺ 线段比（**同高比底**），复合分割 = 比例相乘
- 燕尾定理：cevian 上的点把"面积比"和"底边比"打通，证明靠**借比例**
- 共角模型：共享一个角 → **两条边比例相乘**
- 蝴蝶定理三连：左右相等、中间 $\sqrt{\cdot}$、上下 $(\text{底比})^2$
- 矩形/平行四边形内点：**对边距离之和为定值**
- 面积法证明线段/角的关系（角平分线定理、等腰定值）——"一量两算"是核心
