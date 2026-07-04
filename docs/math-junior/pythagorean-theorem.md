---
title: 勾股定理 — 广州中考典型试题与解析
date: 2026-07-04
tags:
  - 勾股定理
  - 广州中考
  - 直角三角形
  - 压轴题
---

# 勾股定理 — 广州中考典型试题与解析

> 勾股定理是广州中考必考知识点，常与实际问题结合，分值 5&ndash;6 分。几乎每年选择/填空考基础应用，解答题考综合运用，压轴题与二次函数联动。
>
> 难度标注：⭐ 基础 | ⭐⭐ 中等 | ⭐⭐⭐ 较难 | ⭐⭐⭐⭐ 压轴

---

## 案例 1：勾股定理求边长 ⭐

![案例1示意图](./images/pythagoras-case01.png)

**【题目】** 在 Rt&triangle;ABC 中，&angle;C = 90&deg;，AC = 5，BC = 12，求 AB 的长。

<!-- SVG: 直角三角形ABC，角C=90度，AC=5标注在左侧，BC=12标注在底边，AB为斜边待求 -->

**【解析】**

&because; &angle;C = 90&deg;，由勾股定理：

AB&sup2; = AC&sup2; + BC&sup2; = 5&sup2; + 12&sup2; = 25 + 144 = 169

&therefore; AB = &radic;169 = 13

**答：AB = 13**

**【方法提炼】** 勾股定理是最基本的求边工具：直角三角形中，两直角边的平方和等于斜边的平方。常见勾股数组（3,4,5）、（5,12,13）、（8,15,17）、（7,24,25）应熟记，可快速验算。解题第一步：确认直角在哪个顶点，再代入公式。

---

## 案例 2：勾股定理逆定理判定直角三角形 ⭐

![案例2示意图](./images/pythagoras-case02.png)

**【题目】** 已知 &triangle;ABC 的三边长分别为 a = 7，b = 24，c = 25。判断 &triangle;ABC 是否为直角三角形，并说明理由。

<!-- SVG: 三角形ABC，三边分别标注7、24、25，判断是否为直角三角形 -->

**【解析】**

最大边 c = 25，计算：

a&sup2; + b&sup2; = 7&sup2; + 24&sup2; = 49 + 576 = 625

c&sup2; = 25&sup2; = 625

&because; a&sup2; + b&sup2; = c&sup2;

由勾股定理逆定理：&triangle;ABC 是直角三角形，且 &angle;C = 90&deg;（c 为斜边所对的角）。

**答：&triangle;ABC 是直角三角形，最大角为 90&deg;**

**【方法提炼】** 勾股定理逆定理：若三角形三边满足 a&sup2; + b&sup2; = c&sup2;（c 为最大边），则该三角形为直角三角形。操作步骤：（1）找出最大边；（2）计算较小两边的平方和；（3）与最大边的平方比较，相等则为直角三角形。这是判断直角三角形的代数方法，无需量角器。

---

## 案例 3：勾股定理与面积问题 ⭐⭐

![案例3示意图](./images/pythagoras-case03.png)

**【题目】** 如图，在 Rt&triangle;ABC 中，&angle;ACB = 90&deg;，AC = 6，BC = 8。以 AB 为直径作 &odot;O，求 &triangle;ABC 的内切圆半径和阴影部分（半圆在三角形外的部分）面积。

<!-- SVG: 直角三角形ABC，角C=90度，AC=6，BC=8，以AB为直径画半圆，半圆在三角形外侧，求阴影面积 -->

**【解析】**

AB = &radic;(36 + 64) = 10

**（1）求内切圆半径 r**

S&triangle;ABC = 1/2 &times; AC &times; BC = 1/2 &times; 6 &times; 8 = 24

内切圆半径公式：S = r &times; p（p 为半周长）

p = (6 + 8 + 10)/2 = 12

r = S/p = 24/12 = 2

**（2）求阴影面积**

半圆面积 = 1/2 &times; &pi; &times; (AB/2)&sup2; = 1/2 &times; &pi; &times; 25 = 25&pi;/2

S&triangle;ABC = 24

阴影面积 = 半圆面积 &minus; S&triangle;ABC = 25&pi;/2 &minus; 24

**答：内切圆半径 r = 2，阴影面积为 25&pi;/2 &minus; 24**

**【方法提炼】** 勾股定理与面积的综合，关键公式：（1）直角三角形内切圆半径 r = (a + b &minus; c)/2（a、b 为直角边，c 为斜边），可由 S = rp 推导；（2）面积割补法：不规则图形面积 = 简单图形面积的加减。广州中考常考"半圆&minus;三角形"型阴影面积。

---

## 案例 4：折叠中的勾股定理 ⭐⭐

![案例4示意图](./images/pythagoras-case04.png)

**【题目】** 如图，在矩形 ABCD 中，AB = 6，BC = 8。将 &triangle;ABE 沿 AE 折叠，使点 B 恰好落在对角线 AC 上的点 F 处。求 BE 的长。

<!-- SVG: 矩形ABCD，AB=6，BC=8，E在BC上，沿AE折叠B到F，F在AC上，求BE -->

**【解析】**

矩形 ABCD 中，AB = 6，BC = 8。

AC = &radic;(AB&sup2; + BC&sup2;) = &radic;(36 + 64) = 10

折叠性质：AB = AF = 6，BE = FE，&angle;AFE = &angle;B = 90&deg;。

FC = AC &minus; AF = 10 &minus; 6 = 4

设 BE = x，则 FE = x，EC = 8 &minus; x。

在 Rt&triangle;EFC 中，&angle;EFC = 90&deg;（由折叠 &angle;AFE = 90&deg;，F 在 AC 上，EF &perp; AC），

由勾股定理：FE&sup2; + FC&sup2; = EC&sup2;

x&sup2; + 4&sup2; = (8 &minus; x)&sup2;

x&sup2; + 16 = 64 &minus; 16x + x&sup2;

16 = 64 &minus; 16x

16x = 48

x = 3

**答：BE = 3**

**【方法提炼】** 折叠问题的核心：折叠前后图形全等，对应边相等、对应角相等。解题步骤：（1）写出所有等量关系（AB = AF，BE = FE，&angle;B = &angle;AFE = 90&deg;）；（2）在新的直角三角形中用勾股定理列方程；（3）解方程。折叠产生直角是列勾股方程的关键条件。

---

## 案例 5：最短路径问题（展开图）⭐⭐

![案例5示意图](./images/pythagoras-case05.png)

**【题目】** 如图，长方体盒子的长、宽、高分别为 3、4、5。一只蚂蚁从顶点 A 沿表面爬到对角顶点 B&prime;，求最短路径的长度。

<!-- SVG: 长方体，长3宽4高5，A在左下前，B'在右后上，蚂蚁从A沿表面爬到B' -->

**【解析】**

蚂蚁沿表面爬行，最短路径需将长方体展开为平面图，在展开图上用勾股定理求直线距离。

三种展开方式：

**方式一：** 沿前面和上面展开

路径跨越 3 和 5 两个方向的棱，展开后水平距离 = 3 + 4 = 7，竖直距离 = 5。

AB&prime;&sup2; = 7&sup2; + 5&sup2; = 49 + 25 = 74，AB&prime; = &radic;74

**方式二：** 沿前面和右面展开

展开后水平距离 = 3，竖直距离 = 4 + 5 = 9。

AB&prime;&sup2; = 3&sup2; + 9&sup2; = 9 + 81 = 90，AB&prime; = &radic;90

**方式三：** 沿左面和上面展开

展开后水平距离 = 4 + 3 = 7，竖直距离 = 5。与方式一相同。

再考虑：沿左面和后面展开

展开后水平距离 = 4，竖直距离 = 3 + 5 = 8。

AB&prime;&sup2; = 4&sup2; + 8&sup2; = 16 + 64 = 80，AB&prime; = &radic;80

比较：&radic;74 &lt; &radic;80 &lt; &radic;90

最短路径为 &radic;74。

**答：最短路径长度为 &radic;74**

**【方法提炼】** 立体表面最短路径问题，核心方法：展开成平面图，将空间折线变平面直线，用勾股定理求长度。关键：列出所有展开方式，逐一计算取最小值。展开后两点的距离公式：&radic;((a+b)&sup2;+c&sup2;)，其中 a、b、c 是长方体三棱长（不同的组合方式取最小值）。

---

## 案例 6：勾股定理与圆的综合 ⭐⭐⭐

![案例6示意图](./images/pythagoras-case06.png)

**【题目】** 如图，AB 是 &odot;O 的直径，弦 CD &perp; AB 于 E，CD = 8，&odot;O 的半径为 5。求 AE 和 AC 的长。

<!-- SVG: 圆O，AB为直径，CD垂直AB于E，CD=8，半径=5，求AE和AC -->

**【解析】**

设圆心为 O，半径 r = 5。

由垂径定理：CE = DE = CD/2 = 4。

在 Rt&triangle;OCE 中，&angle;OEC = 90&deg;：

OE = &radic;(OC&sup2; &minus; CE&sup2;) = &radic;(25 &minus; 16) = &radic;9 = 3

AE = AO &minus; OE = 5 &minus; 3 = 2（E 在 O 和 A 之间时）

或 AE = AO + OE = 5 + 3 = 8（E 在 O 的另一侧时）

通常取 E 在 O 和 A 之间，AE = 2。

在 Rt&triangle;ACE 中，&angle;AEC = 90&deg;：

AC = &radic;(AE&sup2; + CE&sup2;) = &radic;(4 + 16) = &radic;20 = 2&radic;5

**答：AE = 2，AC = 2&radic;5**

**【方法提炼】** 圆中垂直弦的问题，垂径定理+勾股定理是黄金组合。步骤：（1）垂径定理得半弦长；（2）在由半径、半弦、弦心距构成的直角三角形中用勾股定理求弦心距；（3）再在相关直角三角形中求目标量。记住：半径、弦心距、半弦构成勾股三元组。

---

## 案例 7：坐标系中勾股定理应用 ⭐⭐⭐

![案例7示意图](./images/pythagoras-case07.png)

**【题目】** 在平面直角坐标系中，A(2, 3)、B(&minus;1, 1)、C(5, &minus;1)。（1）判断 &triangle;ABC 的形状；（2）求 &triangle;ABC 的面积。

<!-- SVG: 坐标系中A(2,3)、B(-1,1)、C(5,-1)三点构成三角形 -->

**【解析】**

**（1）利用两点间距离公式求三边长**

AB = &radic;((2&minus;(&minus;1))&sup2; + (3&minus;1)&sup2;) = &radic;(9 + 4) = &radic;13

BC = &radic;((&minus;1&minus;5)&sup2; + (1&minus;(&minus;1))&sup2;) = &radic;(36 + 4) = &radic;40 = 2&radic;10

AC = &radic;((2&minus;5)&sup2; + (3&minus;(&minus;1))&sup2;) = &radic;(9 + 16) = &radic;25 = 5

检查：AB&sup2; + AC&sup2; = 13 + 25 = 38，BC&sup2; = 40，不相等。

AB&sup2; + BC&sup2; = 13 + 40 = 53，AC&sup2; = 25，不相等。

AC&sup2; + BC&sup2; = 25 + 40 = 65，AB&sup2; = 13，不相等。

三边均不满足勾股关系，&triangle;ABC 不是直角三角形。

再检查等腰：三边 &radic;13、2&radic;10、5 互不相等，也不是等腰三角形。

**答：&triangle;ABC 为一般锐角三角形**

**（2）求面积**

用坐标面积公式（鞋带公式）：

S = 1/2 |x<sub>A</sub>(y<sub>B</sub> &minus; y<sub>C</sub>) + x<sub>B</sub>(y<sub>C</sub> &minus; y<sub>A</sub>) + x<sub>C</sub>(y<sub>A</sub> &minus; y<sub>B</sub>)|

= 1/2 |2(1&minus;(&minus;1)) + (&minus;1)((&minus;1)&minus;3) + 5(3&minus;1)|

= 1/2 |2&times;2 + (&minus;1)&times;(&minus;4) + 5&times;2|

= 1/2 |4 + 4 + 10| = 1/2 &times; 18 = 9

**答：&triangle;ABC 的面积为 9**

**【方法提炼】** 坐标系中的勾股定理应用：两点间距离公式 d = &radic;((x<sub>1</sub>&minus;x<sub>2</sub>)&sup2; + (y<sub>1</sub>&minus;y<sub>2</sub>)&sup2;) 本质就是勾股定理。判断三角形形状时：计算三边，检验勾股关系（是否为直角三角形）和等量关系（是否为等腰三角形）。面积计算优先用鞋带公式，比底&times;高/2更方便。

---

## 案例 8：网格中的勾股定理 ⭐⭐⭐

![案例8示意图](./images/pythagoras-case08.png)

**【题目】** 如图，在 4&times;4 的正方形网格中，每个小正方形的边长为 1。点 A、B、C 均在格点上，求 &angle;ABC 的度数。

<!-- SVG: 4×4网格，A在(1,4)，B在(3,2)，C在(4,4)的格点上，求角ABC -->

**【解析】**

设网格左下角为原点，A(1, 4)，B(3, 2)，C(4, 4)。

AB = &radic;((3&minus;1)&sup2; + (2&minus;4)&sup2;) = &radic;(4 + 4) = &radic;8 = 2&radic;2

BC = &radic;((4&minus;3)&sup2; + (4&minus;2)&sup2;) = &radic;(1 + 4) = &radic;5

AC = &radic;((4&minus;1)&sup2; + (4&minus;4)&sup2;) = &radic;(9 + 0) = 3

在 &triangle;ABC 中，由余弦定理：

cos&angle;ABC = (AB&sup2; + BC&sup2; &minus; AC&sup2;) / (2 &times; AB &times; BC)

= (8 + 5 &minus; 9) / (2 &times; 2&radic;2 &times; &radic;5)

= 4 / (4&radic;10)

= 1/&radic;10 = &radic;10/10

&angle;ABC &asymp; 71.6&deg;

但网格问题常有特殊角度。换一种构造方式：

在 B 处构造直角三角形，将 BA 和 BC 分解为水平和竖直分量：

BA 方向：从 B(3,2) 到 A(1,4)，水平 &minus;2，竖直 +2，即 BA 与水平方向夹角为 135&deg;。

BC 方向：从 B(3,2) 到 C(4,4)，水平 +1，竖直 +2，BC 与水平方向夹角 = arctan(2/1) &asymp; 63.4&deg;。

&angle;ABC = 135&deg; &minus; 63.4&deg; &asymp; 71.6&deg;，与上结果一致。

**答：&angle;ABC &asymp; 71.6&deg;（或写作 arccos(&radic;10/10)）**

**【方法提炼】** 网格中的勾股定理是中考热门题型。核心方法：（1）利用格点坐标计算线段长度（勾股定理）；（2）利用向量或方向角求夹角；（3）判断三角形形状（检验勾股关系）。网格题的常见考点：无理数长度的线段、格点三角形的形状判断、格点正多边形的存在性。技巧：勾股数组（如 1&sup2;+2&sup2;=5, 2&sup2;+3&sup2;=13）在网格中频繁出现。

---

## 案例 9：勾股定理+动点最值问题 ⭐⭐⭐⭐

![案例9示意图](./images/pythagoras-case09.png)

**【题目】** 如图，在 Rt&triangle;ABC 中，&angle;ACB = 90&deg;，AC = 3，BC = 4。点 D 在 AB 上运动，DE &perp; AC 于 E，DF &perp; BC 于 F。连接 EF，求 EF 的最小值。

<!-- SVG: 直角三角形ABC，角C=90度，AC=3，BC=4，D在AB上运动，DE⊥AC于E，DF⊥BC于F，连接EF -->

**【解析】**

DE &perp; AC，DF &perp; BC，&angle;ACB = 90&deg;，

&therefore; 四边形 ECFD 是矩形（三个直角 &angle;C = &angle;DEC = &angle;DFC = 90&deg;）。

矩形的对角线相等：EF = CD。

&therefore; EF 的最小值 = CD 的最小值。

CD 的最小值即点 C 到 AB 的距离（垂线段最短）。

AB = &radic;(9 + 16) = 5

S&triangle;ABC = 1/2 &times; AC &times; BC = 1/2 &times; 3 &times; 4 = 6

又 S&triangle;ABC = 1/2 &times; AB &times; h<sub>C</sub>

h<sub>C</sub> = 2S/AB = 12/5

&therefore; CD 的最小值 = 12/5

EF 的最小值 = 12/5

**答：EF 的最小值为 12/5**

**【方法提炼】** 动点最值问题的核心思路：将动点问题转化为定值问题。本题关键转化——利用矩形对角线相等，将 EF = CD，问题变为"点 C 到直线 AB 的最短距离"。口诀："动点最值，找定点定线，垂线段最短"。一般策略：（1）分析动点轨迹；（2）用全等/相似/特殊四边形性质转化目标量；（3）用垂线段最短、两点间线段最短等基本原理求最值。

---

## 案例 10：勾股定理+二次函数综合压轴 ⭐⭐⭐⭐

![案例10示意图](./images/pythagoras-case10.png)

**【题目】** （广州中考风格压轴）如图，抛物线 y = &minus;x&sup2; + 2x + 3 与 x 轴交于 A、B 两点（A 在 B 左侧），与 y 轴交于点 C。

（1）求 A、B、C 三点的坐标；

（2）点 P 是第一象限内抛物线上一点，当 &triangle;PBC 是以 BC 为直角边的直角三角形时，求点 P 的坐标；

（3）在（2）的条件下，&triangle;PBC 的面积是否存在最大值？若存在，求出最大面积及 P 点坐标。

<!-- SVG: 抛物线y=-x²+2x+3，交x轴于A(-1,0)和B(3,0)，交y轴于C(0,3)，P在第一象限抛物线上 -->

**【解析】**

**（1）求 A、B、C 坐标**

令 y = 0：&minus;x&sup2; + 2x + 3 = 0，x&sup2; &minus; 2x &minus; 3 = 0，(x&minus;3)(x+1) = 0

x = &minus;1 或 x = 3

A(&minus;1, 0)，B(3, 0)

令 x = 0：y = 3，C(0, 3)

**答：A(&minus;1, 0)，B(3, 0)，C(0, 3)**

**（2）&triangle;PBC 以 BC 为直角边**

设 P(x, &minus;x&sup2; + 2x + 3)，其中 0 &lt; x &lt; 3（第一象限）。

BC = &radic;((3&minus;0)&sup2; + (0&minus;3)&sup2;) = &radic;(9 + 9) = 3&radic;2

PB = &radic;((x&minus;3)&sup2; + (&minus;x&sup2;+2x+3)&sup2;)

PC = &radic;(x&sup2; + (&minus;x&sup2;+2x+3&minus;3)&sup2;) = &radic;(x&sup2; + (&minus;x&sup2;+2x)&sup2;) = &radic;(x&sup2; + x&sup2;(x&minus;2)&sup2;)

= &radic;(x&sup2;(1 + (x&minus;2)&sup2;)) = |x|&radic;(1 + (x&minus;2)&sup2;)

&because; x &gt; 0，&therefore; PC = x&radic;(1 + (x&minus;2)&sup2;)

**情况一：&angle;BCP = 90&deg;（PC &perp; BC）**

BC&sup2; + PC&sup2; = PB&sup2;

18 + x&sup2;(1 + (x&minus;2)&sup2;) = (x&minus;3)&sup2; + (&minus;x&sup2;+2x+3)&sup2;

右边展开：(&minus;x&sup2;+2x+3)&sup2; = x<sup>4</sup> &minus; 4x&sup3; &minus; 2x&sup2; + 12x + 9

(x&minus;3)&sup2; = x&sup2; &minus; 6x + 9

右边 = x<sup>4</sup> &minus; 4x&sup3; + x&sup2; + 6x + 18

左边 = 18 + x&sup2; + x&sup2;(x&minus;2)&sup2; = 18 + x&sup2; + x<sup>4</sup> &minus; 4x&sup3; + 4x&sup2; = x<sup>4</sup> &minus; 4x&sup3; + 5x&sup2; + 18

左边 = 右边：

x<sup>4</sup> &minus; 4x&sup3; + 5x&sup2; + 18 = x<sup>4</sup> &minus; 4x&sup3; + x&sup2; + 6x + 18

4x&sup2; = 6x

4x&sup2; &minus; 6x = 0

2x(2x &minus; 3) = 0

x = 0（舍去，不在第一象限内取有效点）或 x = 3/2

x = 3/2 时，y = &minus;9/4 + 3 + 3 = 15/4

P<sub>1</sub>(3/2, 15/4)

**情况二：&angle;CBP = 90&deg;（PB &perp; BC）**

BC&sup2; + PB&sup2; = PC&sup2;

18 + (x&minus;3)&sup2; + (&minus;x&sup2;+2x+3)&sup2; = x&sup2;(1+(x&minus;2)&sup2;)

18 + x&sup2; &minus; 6x + 9 + x<sup>4</sup> &minus; 4x&sup3; + x&sup2; + 6x + 18 = x<sup>4</sup> &minus; 4x&sup3; + 5x&sup2; + 18

整理左边：x<sup>4</sup> &minus; 4x&sup3; + 2x&sup2; + 45

右边：x<sup>4</sup> &minus; 4x&sup3; + 5x&sup2; + 18

2x&sup2; + 45 = 5x&sup2; + 18

3x&sup2; = 27

x&sup2; = 9，x = 3（此时 P 与 B 重合，舍去）

**答：P(3/2, 15/4)**

**（3）求 &triangle;PBC 面积最大值**

P(3/2, 15/4)，B(3, 0)，C(0, 3)

S&triangle;PBC = 1/2 |x<sub>B</sub>(y<sub>C</sub>&minus;y<sub>P</sub>) + x<sub>C</sub>(y<sub>P</sub>&minus;y<sub>B</sub>) + x<sub>P</sub>(y<sub>B</sub>&minus;y<sub>C</sub>)|

= 1/2 |3(3&minus;15/4) + 0 + 3/2(0&minus;3)|

= 1/2 |3 &times; (&minus;3/4) + 3/2 &times; (&minus;3)|

= 1/2 |&minus;9/4 &minus; 9/2|

= 1/2 &times; 27/4 = 27/8

更一般地，若 P(x, &minus;x&sup2;+2x+3) 在 BC 上方运动（0 &lt; x &lt; 3），用"铅垂高&times;水平宽"法：

BC 所在直线方程：y = &minus;x + 3

P 到 BC 的距离 d = |&minus;x&sup2;+2x+3&minus;(&minus;x+3)|/&radic;2 = |&minus;x&sup2;+3x|/&radic;2 = x(3&minus;x)/&radic;2

S&triangle;PBC = 1/2 &times; BC &times; d = 1/2 &times; 3&radic;2 &times; x(3&minus;x)/&radic;2 = 3x(3&minus;x)/2

当 x = 3/2 时，S = 3 &times; 3/2 &times; 3/2 / 2 = 27/8

但注意：第（2）问限制 &angle;BCP = 90&deg;，只有 x = 3/2 一个解。

在限制条件下 &triangle;PBC 面积为 27/8。

若不限制直角条件，S = 3x(3&minus;x)/2 = &minus;3(x&sup2;&minus;3x)/2，x = 3/2 时取最大值 27/8。两者恰好一致。

**答：&triangle;PBC 面积的最大值为 27/8，此时 P(3/2, 15/4)**

**【方法提炼】** 二次函数+勾股定理综合压轴题是广州中考的经典模式。解题框架：（1）求关键点坐标（令 y=0 求 x 轴交点，令 x=0 求 y 轴交点）；（2）设动点坐标，用勾股定理表示三边，列方程求解（注意分类讨论哪个角是直角）；（3）面积最值常用"铅垂高&times;水平宽"法，转化为二次函数求最值。关键技巧：勾股定理建立方程后，展开化简时注意同类项对消，通常能大幅简化。

---

## 【方法总结】

### 一、勾股定理核心公式

| 内容 | 公式 | 说明 |
|------|------|------|
| 勾股定理 | a&sup2; + b&sup2; = c&sup2; | 直角三角形，c 为斜边 |
| 逆定理 | 若 a&sup2; + b&sup2; = c&sup2;，则 &triangle; 为直角三角形 | c 为最大边 |
| 两点间距离 | d = &radic;((x<sub>1</sub>&minus;x<sub>2</sub>)&sup2; + (y<sub>1</sub>&minus;y<sub>2</sub>)&sup2;) | 坐标系中的勾股定理 |

### 二、常见勾股数组（务必熟记）

| 组号 | 三边 | 应用场景 |
|------|------|----------|
| 基本组 | 3, 4, 5 | 最常用 |
| 基本组 | 5, 12, 13 | 高频 |
| 基本组 | 8, 15, 17 | 中考常见 |
| 基本组 | 7, 24, 25 | 偶有出现 |
| 倍数组 | 6, 8, 10 | 3-4-5 的 2 倍 |
| 倍数组 | 9, 12, 15 | 3-4-5 的 3 倍 |

### 三、六大题型与解法

| 题型 | 核心方法 | 关键步骤 |
|------|----------|----------|
| 直接求边 | 勾股定理 | 确认直角位置，代入公式 |
| 判定直角三角形 | 勾股逆定理 | 找最大边，验证 a&sup2;+b&sup2;=c&sup2; |
| 面积问题 | 勾股+面积割补 | 先求边长，再算面积 |
| 折叠问题 | 翻折全等+勾股列方程 | 标记等量，在新直角三角形中列方程 |
| 最短路径 | 展开图+勾股 | 立体展开为平面，列举所有路径取最小 |
| 动点最值 | 转化+基本原理 | EF=CD等转化，垂线段最短 |

### 四、勾股定理的延伸应用

1. **弦长公式**：圆中垂直弦 &rarr; 垂径定理 + 勾股定理（半径&sup2; = 弦心距&sup2; + 半弦&sup2;）
2. **坐标距离**：两点间距离公式 = 勾股定理的坐标形式
3. **网格问题**：格点线段长度 = 勾股定理，格点三角形形状 = 勾股逆定理
4. **动点最值**：转化目标量 + 垂线段最短 / 两点之间线段最短
5. **函数综合**：抛物线上点的坐标 + 勾股定理列方程 + 二次函数求最值

### 五、解题口诀

- **求边长**："确认直角，代入勾股，开方取正"
- **判直角**："找最长边，算平方和，比较判等"
- **折叠题**："折叠全等，标记等量，新三角形列方程"
- **最短路径**："展开成面，直线最短，全列取小"
- **动点最值**："转化定值，垂线最短，二次函数求极值"
