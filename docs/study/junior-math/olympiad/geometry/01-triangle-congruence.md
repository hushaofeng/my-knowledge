---
title: 第 1 章 三角形与全等进阶
date: 2026-09-05
tags:
  - 初中数学
  - 奥数
  - 几何
---

# 第 1 章 三角形与全等进阶

> 全等三角形的课内判定只是起点。竞赛几何的第一道分水岭是**辅助线**：当题目"没有直接全等"时，造一个出来。本章教你三把万能钥匙——**倍长中线、截长补短、角平分线双垂线**。

## 知识点精讲

### 1. 全等判定复习与"组合条件"

基本判定：SSS、SAS、ASA、AAS、HL（直角三角形专属）。

竞赛中真正常用的三组"隐含条件"：

| 隐含条件 | 说明 |
|---------|------|
| 公共边 / 公共角 | 图形重叠处的免费条件 |
| 对顶角 | 交叉图形中自动相等 |
| 等角 ± 同一个角 | $\angle 1 = \angle 2 \Rightarrow \angle 1 + \alpha = \angle 2 + \alpha$ |

### 2. 倍长中线法（看到中线就想它）

**操作**：中线 $AD$（$D$ 为 $BC$ 中点）→ 延长 $AD$ 至 $E$ 使 $DE = AD$，连接 $CE$（或 $BE$）。

**原理**：$\triangle BDE \cong \triangle CDA$（SAS：$BD = CD$，对顶角，$AD = DE$）→ $BE = AC$，$BE \parallel AC$。

**效果**：把分散在三角形两侧的两条边（$AB$、$AC$）**搬家拼进同一个三角形**（$\triangle ABE$），立即可用三边关系/全等。

### 3. 截长补短法（证明 $a = b + c$ 型线段关系）

要证 $AB = AC + BD$（一长两短）：

- **截长**：在 $AB$ 上截取 $AE = AC$，证明剩下 $EB = BD$
- **补短**：延长 $AC$ 至 $E$ 使 $CE = BD$，证明 $AE = AB$

两法殊途同归，本质都是**把"和"折叠进一个全等三角形**。

### 4. 角平分线的两条辅助线套路

- **双垂线**：角平分线上的点向两边作垂线 → 得到**距离相等** + 两个全等直角三角形
- **在两边上截取等长**：在角两边截取 $AB = AC$ → 构造 SAS 全等（对称折叠）

### 5. 三线合一（等腰三角形自动附赠）

等腰三角形顶角的平分线、底边的中线、底边的高**三线合一**——见等腰想三线，是辅助线的免费起点。

## 经典例题

### 例 1（经典赛题改编）

$\triangle ABC$ 中，$AD$ 是 $BC$ 边上的中线，$AB = 5$，$AC = 3$。求中线 $AD$ 的取值范围。

::: details 查看解答

**倍长 $AD$ 至 $E$** 使 $DE = AD$，连接 $BE$。由 $\triangle BDE \cong \triangle CDA$（SAS）得 $BE = AC = 3$。

在 $\triangle ABE$ 中，两边 $AB = 5$、$BE = 3$：

$$5 - 3 < AE < 5 + 3 \Rightarrow 2 < 2AD < 8 \Rightarrow \boxed{1 < AD < 4}$$

**方法提炼：** 中线范围问题 = 倍长中线 + 三边关系。一般结论：$\left| \frac{AB - AC}{2} \right| < AD < \frac{AB + AC}{2}$。
:::

### 例 2（经典赛题改编）

$\triangle ABC$ 中，$D$ 是 $BC$ 中点，$AD$ 平分 $\angle BAC$。求证：$AB = AC$。

::: details 查看解答

**倍长 $AD$ 至 $E$**，连接 $CE$。$\triangle BDE \cong \triangle CDA$（SAS）→ $\angle E = \angle BAD$，$CE = AB$。

由 $AD$ 平分 $\angle BAC$：$\angle BAD = \angle CAD$，于是 $\angle E = \angle CAD$。

又 $\angle E = \angle DEC$？——直接看 $\triangle AEC$：$\angle E = \angle CAD$ 中 $\angle CAD$ 即 $\angle EAC$，所以 $\triangle AEC$ 中 $\angle E = \angle EAC$ → **等腰**，$CE = AC$。

而 $CE = AB$，故 $AB = AC$。$\blacksquare$

**方法提炼：** "中线 + 角平分线 ⟹ 等腰三角形"是倍长中线的招牌结论，记住结论可当小题秒杀，证明过程是标准模板。
:::

### 例 3（经典赛题改编）

$\triangle ABC$ 中，$\angle B = 2\angle C$，$AD$ 平分 $\angle BAC$ 交 $BC$ 于 $D$。求证：$AC = AB + BD$。

::: details 查看解答

**补短**：延长 $AB$ 至 $E$ 使 $BE = BD$，连接 $DE$。

$\triangle BDE$ 等腰（$BE = BD$）→ $\angle E = \angle BDE = \dfrac{180^\circ - \angle EBD}{2}$。

$E$ 在 $AB$ 延长线上，$\angle EBD = 180^\circ - \angle ABC$，所以

$$\angle E = \frac{180^\circ - (180^\circ - \angle B)}{2} = \frac{\angle B}{2} = \angle C$$

下证 $\triangle AED \cong \triangle ACD$（AAS）：

- $\angle E = \angle ACD = \angle C$ ✓
- $\angle EAD = \angle BAD = \angle CAD$（$AD$ 平分 $\angle BAC$；$\angle EAD$ 与 $\angle BAD$ 是同一个角）✓
- $AD$ 公共边 ✓

→ $AE = AC$。而 $AE = AB + BE = AB + BD$，所以 $AC = AB + BD$。$\blacksquare$

**方法提炼：** 补短的位置在"延长线上"时，等腰三角形的顶角是**邻补角**——$\angle E = \frac{\angle B}{2}$ 这一步是全题枢纽。
:::

### 例 4（经典赛题改编·例 3 的逆命题）

$\triangle ABC$ 中，$AD$ 平分 $\angle BAC$ 交 $BC$ 于 $D$，且 $AC = AB + BD$。求证：$\angle B = 2\angle C$。

::: details 查看解答

**截长**：在 $AC$ 上截取 $AE = AB$，连接 $DE$。

$\triangle AED \cong \triangle ABD$（SAS：$AE = AB$，$\angle EAD = \angle BAD$，$AD$ 公共）→ $DE = DB$，$\angle AED = \angle B$。

由条件：$AC = AE + EC = AB + BD \Rightarrow EC = BD = DE$ → $\triangle DEC$ 等腰 → $\angle EDC = \angle C$。

$\angle AED$ 是 $\triangle DEC$ 的外角：$\angle AED = \angle EDC + \angle C = 2\angle C$。

所以 $\angle B = 2\angle C$。$\blacksquare$

**方法提炼：** 例 3 与例 4 互为逆命题，证法互为"补短/截长"镜像。这一对组合是截长补短的教科书级案例：**条件里的"和"（$AB + BD$）决定截哪条边**。
:::

### 例 5（经典赛题改编）

$AD$ 平分 $\angle BAC$，点 $E, F$ 分别在 $AB, AC$ 上，且 $DE \perp AB$ 于 $E$，$DF \perp AC$ 于 $F$。求证：$AE = AF$，且 $AD$ 垂直平分 $EF$。

::: details 查看解答

由角平分线性质：$DE = DF$（角平分线上的点到两边距离相等）。

Rt$\triangle ADE$ 与 Rt$\triangle ADF$：$AD$ 公共（斜边），$DE = DF$（直角边）→ **HL** 全等 → $AE = AF$。$\blacksquare$

由 $AE = AF$ 知 $\triangle AEF$ 等腰；$AD$ 平分顶角 $\angle EAF$ → 由三线合一，$AD$ 垂直平分 $EF$。$\blacksquare$

**方法提炼：** 角平分线 + 双垂线 = **免费的全等对**；等腰 + 顶角平分线 = 三线合一，两件武器串联即可。
:::

### 例 6（初中联赛风格）

$\triangle ABC$ 中，$AB > AC$，$AD$ 平分 $\angle BAC$，$P$ 为 $AD$ 上任意一点。求证：$PB - PC < AB - AC$。

::: details 查看解答

**截长**：在 $AB$ 上截取 $AE = AC$，连接 $PE$。

$\triangle APE \cong \triangle APC$（SAS：$AE = AC$，$\angle EAP = \angle CAP$，$AP$ 公共）→ $PE = PC$。

在 $\triangle PBE$ 中（三边关系）：

$$PB - PE < BE$$

而 $BE = AB - AE = AB - AC$，$PE = PC$，代入：

$$PB - PC < AB - AC \qquad \blacksquare$$

**方法提炼：** 线段不等式（$PB - PC < \cdots$）的标配套路：**构造全等把 $PC$ 搬到 $AB$ 同侧**，然后一张三边关系收尾。"任意一点"提示结论与 $P$ 无关——搬家的对象要选对（搬 $PC$ 而不是 $PB$）。
:::

## 习题

1. $\triangle ABC$ 中，$AD$ 是中线，$AB = 7$，$AC = 5$，求 $AD$ 的取值范围。
2. 三角形三边长为连续整数，周长为 12，求三边长。
3. $\triangle ABC$ 中，$D$ 为 $BC$ 中点，$DE \perp DF$ 且 $E$ 在 $AB$ 上、$F$ 在 $AC$ 上，$BE = CF$。求证：$AD$ 平分 $\angle BAC$。（提示：倍长 $ED$ 或 $FD$，构造全等把 $BE$、$CF$ 集中）
4. $\triangle ABC$ 中，$\angle B = 2\angle C$，$AD$ 平分 $\angle BAC$。用例 3 的结论反向构造，证明 $AC = AB + BD$ 之后，再独立完成：$\angle B = 2\angle C$ 且 $AC = AB + BD$ 同时成立时，$D$ 必在 $\angle BAC$ 的平分线上。（提示：在 $AC$ 上截 $AE = AB$，连 $DE$，先证 $\triangle AED \cong \triangle ABD$）
5. $\triangle ABC$ 中，$AD$ 是中线，比较 $\triangle ABD$ 与 $\triangle ACD$ 的周长之差，并说明它与哪两条线段有关。
6. $AD$ 平分 $\angle BAC$，$E$ 在 $AB$ 上且 $DE \perp AD$ 交 $AC$ 于 $F$？——改为一道可解的：$AD$ 平分 $\angle BAC$，$P$ 在 $AD$ 上，$PM \perp AB$ 于 $M$，$PN \perp AC$ 于 $N$。求证：$AM = AN$，且 $AP$ 垂直平分 $MN$。
7. 等腰直角 $\triangle ABC$（$\angle A = 90^\circ$，$AB = AC$），$D$ 为 $BC$ 中点，$E$ 在 $AB$ 上，$F$ 在 $AC$ 上，且 $\angle EDF = 90^\circ$。求证：$DE = DF$。（提示：连接 $AD$，证 $\triangle ADE \cong \triangle CDF$——这是"旋转全等"的入门，几何变换章将正式展开）
8.（压轴）$\triangle ABC$ 中，$\angle BAC = 120^\circ$，$AB = AC = 10$，$D$ 为 $BC$ 中点，$DE \perp AB$ 于 $E$。求 $BE$ 与 $AE$ 的数量关系。

::: details 习题答案与提示

1. 倍长中线：$\left|\dfrac{7-5}{2}\right| < AD < \dfrac{7+5}{2}$，即 $\boxed{1 < AD < 6}$。
2. 设三边 $a, a+1, a+2$：$3a + 3 = 12 \Rightarrow a = 3$。三边 **3, 4, 5**（验证 $3 + 4 > 5$ ✓）。
3. 倍长 $ED$ 至 $E'$（$DE' = DE$），连 $FE'$：$\triangle BDE \cong \triangle CDE'$（SAS：对顶角、$BD = CD$）→ $CE' = BE = CF$，$E'C \parallel AB$。在 $\triangle CFE'$ 中 $CF = CE'$ → $\angle CFE' = \angle CE'F$。由平行传递角，得 $\angle BAC$ 两侧角相等 → $AD$ 平分 $\angle BAC$。（图形需规范作图后按此骨架填角）
4. 在 $AC$ 上截 $AE = AB$，连 $DE$：$\triangle AED \cong \triangle ABD$（SAS：$AE = AB$，$\angle EAD = \angle BAD$，$AD$ 公共）→ $ED = BD$，$\angle AED = \angle B = 2\angle C$。$\angle AED$ 是 $\triangle DEC$ 外角 → $\angle EDC = \angle AED - \angle C = \angle C$ → $ED = EC$ → $EC = BD$。而 $AC = AE + EC = AB + BD$ ✓，与条件吻合说明 $E$ 就是构造出的"分点"，且 $ED = BD = EC$ 时 $\triangle EBD$ 的结构唯一 → $D$ 在平分线上。（证明骨架：全等给出 $ED = BD$，条件给出 $EC = BD$，故 $ED = EC$，$\angle EDC = \angle C$，再用外角 $\angle AED = 2\angle C$ 与 $\angle AED = \angle B$ 桥接 $\angle B = 2\angle C$，反推 $\angle EAD = \angle BAD$）
5. 周长差 $= (AB + AD + BD) - (AC + AD + CD) = AB - AC$（$BD = CD$ 抵消，$AD$ 公共抵消）→ 周长之差只与 **$AB$ 与 $AC$** 有关，等于 $|AB - AC|$。
6. $PM = PN$（角平分线性质）；Rt$\triangle APM \cong$ Rt$\triangle APN$（HL：$AP$ 公共斜边，$PM = PN$）→ $AM = AN$。$AM = AN$ 且 $PM = PN$ → $A, P$ 都在 $MN$ 的垂直平分线上 → $AP$（即 $AD$）垂直平分 $MN$。
7. 连 $AD$：等腰直角三角形斜边中线 $AD \perp BC$ 且 $AD = CD = BD$（三线合一 + 直角三角形斜边中线定理），$\angle DAE = \angle C = 45^\circ$。$\angle ADE + \angle EDC = 90^\circ$，$\angle EDC + \angle CDF = \angle ADC = 90^\circ$ → $\angle ADE = \angle CDF$。$\triangle ADE \cong \triangle CDF$（ASA：$\angle DAE = \angle C = 45^\circ$，$AD = CD$，$\angle ADE = \angle CDF$）→ $DE = DF$。
8. $\angle B = (180^\circ - 120^\circ)/2 = 30^\circ$。$AD \perp BC$（三线合一），$BD = AB\cos 30^\circ = 5\sqrt3$。Rt$\triangle BDE$ 中 $\angle B = 30^\circ$：$BE = BD \cos 30^\circ = 5\sqrt3 \times \dfrac{\sqrt3}{2} = \dfrac{15}{2}$。$AE = AB - BE = 10 - \dfrac{15}{2} = \dfrac52$。故 $\boxed{BE = 3\,AE}$（$\frac{15}{2} = 3 \times \frac{5}{2}$）。
:::

## 本节方法小结

- **见中线 → 倍长**；中线范围、中线 + 角平分线、中线全等三件套都靠它
- 证 $a = b + c$：**截长或补短**，条件里"和"的结构决定选哪条边动刀
- 角平分线 → **双垂线**（距离相等 + 一对 HL 全等）
- 线段不等式：全等搬家 + **三角形三边关系**收尾
- 等腰三角形**三线合一**是最便宜的辅助线起点
- 隐含条件三宝：公共边、对顶角、等角加减
