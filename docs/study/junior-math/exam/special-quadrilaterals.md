# 特殊平行四边形 — 广州中考典型试题与解析

> 特殊平行四边形（矩形、菱形、正方形）是广州中考几何大题的常客，分值 8-10 分。
>
> 难度标注：⭐ 基础 | ⭐⭐ 中等 | ⭐⭐⭐ 较难 | ⭐⭐⭐⭐ 压轴

---

### 案例 1：矩形性质与判定 ⭐

![案例1示意图](../images/quad-case01.png)

<!-- SVG: 矩形ABCD，对角线AC与BD交于O，标注AB=6，BC=8 -->

**【题目】** 矩形 ABCD 中，AB = 6，BC = 8，对角线 AC 与 BD 交于点 O。求：(1) 对角线 AC 的长；(2) 点 O 到 AB 的距离。

**【解析】**

(1) 矩形中 &ang;ABC = 90&deg;，由勾股定理：

AC&sup2; = AB&sup2; + BC&sup2; = 36 + 64 = 100

AC = 10

(2) 矩形对角线互相平分且相等，O 为 AC 中点。

O 到 AB 的距离 = O 的纵坐标（以 A 为原点，AB 为 x 轴方向）

O 到 AB 的距离 = BC/2 = 4

**答：**(1) AC = 10；(2) O 到 AB 的距离为 4

**【方法提炼】** 矩形的核心性质：四个角为直角 + 对角线相等且互相平分。求距离时注意利用对称性简化计算。

---

### 案例 2：菱形性质与判定 ⭐

![案例2示意图](../images/quad-case02.png)

<!-- SVG: 菱形ABCD，对角线AC=6，BD=8，交于O，标注垂直符号 -->

**【题目】** 菱形 ABCD 的对角线 AC = 6，BD = 8，交于点 O。求：(1) 菱形的面积；(2) 菱形的边长。

**【解析】**

(1) 菱形面积 = 对角线乘积的一半：

S = &frac12; &times; AC &times; BD = &frac12; &times; 6 &times; 8 = 24

(2) 菱形对角线互相垂直平分，在 Rt&triangle;AOB 中：

OA = 3，OB = 4

AB&sup2; = OA&sup2; + OB&sup2; = 9 + 16 = 25

AB = 5

**答：**(1) 面积为 24；(2) 边长为 5

**【方法提炼】** 菱形两大核心性质：四边相等 + 对角线互相垂直平分。面积公式 S = &frac12;d&sub1;d&sub2; 比底&times;高更常用。

---

### 案例 3：正方形性质 ⭐⭐

![案例3示意图](../images/quad-case03.png)

<!-- SVG: 正方形ABCD，E在BC上，F在CD上，AE和BF交于G，标注BE=CF -->

**【题目】** 正方形 ABCD 的边长为 6，E 在 BC 上，F 在 CD 上，且 BE = CF = 2。求证：AE &perp; BF。

**【解析】**

&because; ABCD 为正方形，&therefore; AB = BC，&ang;ABE = &ang;BCF = 90&deg;

又 BE = CF = 2

&therefore; &triangle;ABE &cong; &triangle;BCF (SAS)

&therefore; &ang;BAE = &ang;CBF

设 AE 与 BF 交于 G，

在 &triangle;ABG 中，&ang;ABG + &ang;BAG = &ang;ABG + &ang;CBF = &ang;ABE = 90&deg;

&therefore; &ang;AGB = 180&deg; &minus; 90&deg; = 90&deg;

即 AE &perp; BF

**答：** AE &perp; BF

**【方法提炼】** 正方形中证明垂直的经典方法：构造全等三角形转移角，利用互余关系得直角。BE = CF 是常见的"截取等长"条件。

---

### 案例 4：平行四边形中的折叠问题 ⭐⭐

![案例4示意图](../images/quad-case04.png)

<!-- SVG: 矩形ABCD沿EF折叠，A落至A'在BC上，AB=3，BC=6，标注折叠线EF -->

**【题目】** 矩形 ABCD 中，AB = 3，BC = 6，沿 EF 折叠使 A 落在 BC 上的 A' 处，且 BA' = 4。求折痕 EF 的长。

**【解析】**

折叠前后对应边相等：A'E = AE，A'F = AF

在 Rt&triangle;ABA' 中：

BA' = 4，AB = 3

AA'&sup2; = AB&sup2; + BA'&sup2; = 9 + 16 = 25，AA' = 5

设 AE = x，则 A'E = x，BE = 6 &minus; x

在 Rt&triangle;BA'E 中：BE&sup2; + BA'&sup2; = A'E&sup2;

(6 &minus; x)&sup2; + 16 = x&sup2;

36 &minus; 12x + x&sup2; + 16 = x&sup2;

52 = 12x，x = 13/3

&therefore; AE = 13/3

同理设 AF = y，则 A'F = y

在 Rt&triangle;A'CF 中：A'F&sup2; = CF&sup2; + A'C&sup2;

y&sup2; = (6 &minus; y)&sup2; + 1&sup2; = 36 &minus; 12y + y&sup2; + 1

0 = 37 &minus; 12y，y = 37/12

在 Rt&triangle;AEF 中：

EF&sup2; = AE&sup2; + AF&sup2; = (13/3)&sup2; + (37/12)&sup2; = 169/9 + 1369/144

= 2704/144 + 1369/144 = 4073/144

EF = &radic;(4073)/12

化简 4073 = 4073（素数），EF = &radic;4073 / 12

**答：** EF = &radic;4073 / 12

**【方法提炼】** 折叠问题的核心：折叠前后对应边相等、对应角相等。在矩形折叠中，落点在边上时，勾股定理列方程是基本方法。

---

### 案例 5：矩形中的动点问题 ⭐⭐

![案例5示意图](../images/quad-case05.png)

<!-- SVG: 矩形ABCD，AB=8，BC=6，P在AD上从A向D移动，AP=t，BP和CP标注 -->

**【题目】** 矩形 ABCD 中，AB = 8，BC = 6，点 P 从 A 沿 AD 向 D 移动，AP = t (0 &le; t &le; 6)。当 &triangle;BPC 为等腰三角形时，求 t 的值。

**【解析】**

BC = 6，BP = &radic;(AB&sup2; + AP&sup2;) = &radic;(64 + t&sup2;)，CP = &radic;(CD&sup2; + DP&sup2;) = &radic;(64 + (6&minus;t)&sup2;)

分三种情况：

**情况一：BP = BC = 6**

64 + t&sup2; = 36，t&sup2; = &minus;28，无解

**情况二：CP = BC = 6**

64 + (6&minus;t)&sup2; = 36，(6&minus;t)&sup2; = &minus;28，无解

**情况三：BP = CP**

&radic;(64 + t&sup2;) = &radic;(64 + (6&minus;t)&sup2;)

t&sup2; = (6&minus;t)&sup2; = 36 &minus; 12t + t&sup2;

12t = 36，t = 3

验证：t = 3 时，BP = CP = &radic;73 &ne; 6 = BC，&triangle;BPC 为等腰三角形 &check;

**答：** t = 3

**【方法提炼】** 矩形中动点构成等腰三角形，需分三种情况讨论。本题只有 BP = CP 一种情况有解，因为 P 在 AD 上时 BP、CP 总大于 BC。

---

### 案例 6：菱形面积与对角线 ⭐⭐⭐

![案例6示意图](../images/quad-case06.png)

<!-- SVG: 菱形ABCD，对角线AC和BD交于O，AC=12，BD=16，E在AB上，标注垂线EF垂直BD于F -->

**【题目】** 菱形 ABCD 的对角线 AC = 12，BD = 16，点 E 在 AB 上，EF &perp; BD 于 F。求 EF 的长。

**【解析】**

菱形对角线互相垂直平分：

OA = 6，OB = 8，AB = &radic;(36 + 64) = 10

S&triangle;ABD = &frac12; &times; BD &times; OA = &frac12; &times; 16 &times; 6 = 48

又 S&triangle;ABD = &frac12; &times; AB &times; EF（以 AB 为底，EF 为 A 到 BD 的距离转换）

但更直接：S&triangle;ABD = &frac12; &times; BD &times; EF

48 = &frac12; &times; 16 &times; EF

EF = 6

**答：** EF = 6

**【方法提炼】** 菱形中求点到对角线的距离，利用面积等积法最快捷：&frac12;d&sub1; &times; d&sub2; = &frac12;d&sub1; &times; h，其中 h 即为所求距离。

---

### 案例 7：四边形综合证明 ⭐⭐⭐

![案例7示意图](../images/quad-case07.png)

<!-- SVG: 平行四边形ABCD，E和F分别在AB和CD上，AE=CF，连DE和BF -->

**【题目】** 平行四边形 ABCD 中，E、F 分别在 AB、CD 上，且 AE = CF。求证：DEBF 是平行四边形。

**【解析】**

&because; ABCD 为平行四边形

&therefore; AB // CD，AB = CD

又 AE = CF

&therefore; AB &minus; AE = CD &minus; CF，即 EB = DF

又 EB // DF（EB &sube; AB，DF &sube; CD，AB // CD）

一组对边平行且相等

&therefore; DEBF 为平行四边形

**答：** DEBF 是平行四边形

**【方法提炼】** 在平行四边形中截取等长线段，常用"一组对边平行且相等"判定平行四边形，这是最简洁的判定方法。

---

### 案例 8：特殊四边形与全等三角形 ⭐⭐⭐

![案例8示意图](../images/quad-case08.png)

<!-- SVG: 正方形ABCD，E在BC上，F在CD上，AE平分角BAF，标注角相等 -->

**【题目】** 正方形 ABCD 的边长为 1，E 在 BC 上，F 在 CD 上，AE 平分 &ang;BAF。求证：AF = AB + FC。

**【解析】**

延长 CB 至 G，使 BG = FC，连 AG。

&because; ABCD 为正方形，&therefore; AB = AD，&ang;ABG = &ang;ADF = 90&deg;

又 BG = FC = DF（&because; BC = CD &minus; FC &minus; BF 关系中注意 CD = BC = 1）

在 &triangle;ABG 和 &triangle;ADF 中：

AB = AD，&ang;ABG = &ang;ADF = 90&deg;，BG = DF

&therefore; &triangle;ABG &cong; &triangle;ADF (SAS)

&therefore; &ang;BAG = &ang;DAF

又 &ang;BAF = &ang;BAE + &ang;EAF，AE 平分 &ang;BAF

&therefore; &ang;BAE = &ang;EAF

&ang;DAF = &ang;BAF &minus; 90&deg; = 2&ang;BAE &minus; 90&deg;

&ang;BAG = &ang;DAF

AG = AF（全等对应边）

AF = AG，而 AB + BG = AB + FC

&therefore; AF = AB + FC

**答：** AF = AB + FC

**【方法提炼】** 证明一条线段等于两段之和，常用"截长补短法"：延长（补短）或在长线段上截取（截长），构造全等三角形转化。

---

### 案例 9：正方形 + 旋转全等压轴 ⭐⭐⭐⭐

![案例9示意图](../images/quad-case09.png)

<!-- SVG: 正方形ABCD，E在BC上，F在CD上，角EAF=45度，标注旋转三角形ABE到ADG -->

**【题目】** 正方形 ABCD 的边长为 6，E 在 BC 上，F 在 CD 上，&ang;EAF = 45&deg;，BE = 2。求 DF 的长。

**【解析】**

将 &triangle;ABE 绕 A 顺时针旋转 90&deg; 到 &triangle;ADG 的位置。

则 G 在 CD 延长线上，DG = BE = 2，AG = AE

&ang;GAF = &ang;GAD + &ang;DAF = &ang;BAE + &ang;DAF

= &ang;BAE + (&ang;BAD &minus; &ang;BAF) = &ang;BAE + 90&deg; &minus; &ang;BAF

又 &ang;EAF = 45&deg;，&therefore; &ang;BAE + &ang;FAD = 90&deg; &minus; 45&deg; = 45&deg;

&therefore; &ang;GAF = &ang;BAE + &ang;FAD = 45&deg;

在 &triangle;AEF 和 &triangle;AGF 中：

AE = AG，AF = AF，&ang;EAF = &ang;GAF = 45&deg;

&therefore; &triangle;AEF &cong; &triangle;AGF (SAS)

&therefore; EF = GF

EF = BE + CF（需证明 E、F 共线结论，本题中）

设 DF = x，则 CF = 6 &minus; x

GF = DG + DF = 2 + x

EF = BE + CF &rarr; EF = 2 + 6 &minus; x = 8 &minus; x（需证明）

实际上由 &triangle;AEF &cong; &triangle;AGF：

EF = GF = 2 + x

又 EF&sup2; = BE&sup2; + (BC &minus; BE)&sup2; ... 不直接

换方法：在 Rt&triangle;ABE 中，AE&sup2; = 36 + 4 = 40

EF = GF = DG + DF = 2 + x

CF = 6 &minus; x

在 Rt&triangle;CEF 中：EF&sup2; = CE&sup2; + CF&sup2; = (6&minus;2)&sup2; + (6&minus;x)&sup2; = 16 + (6&minus;x)&sup2;

又 EF = 2 + x

(2 + x)&sup2; = 16 + (6 &minus; x)&sup2;

4 + 4x + x&sup2; = 16 + 36 &minus; 12x + x&sup2;

4 + 4x = 52 &minus; 12x

16x = 48

x = 3

**答：** DF = 3

**【方法提炼】** 正方形中 45&deg; 角问题，旋转 90&deg; 构造全等是经典方法。旋转后 &ang;GAF = &ang;EAF，证明 &triangle;AEF &cong; &triangle;AGF，从而 EF = GF，列方程求解。

---

### 案例 10：四边形 + 二次函数综合压轴 ⭐⭐⭐⭐

![案例10示意图](../images/quad-case10.png)

<!-- SVG: 坐标系中抛物线y=-x²+2x+3与x轴交A(-1,0)和B(3,0)，与y轴交C(0,3)，矩形DEFG内接在三角形ABC中 -->

**【题目】** 抛物线 y = &minus;x&sup2; + 2x + 3 与 x 轴交于 A、B（A 在 B 左侧），与 y 轴交于 C。在 &triangle;ABC 内作矩形 DEFG，其中 D、G 在 x 轴上，E 在 AC 上，F 在 BC 上。求矩形 DEFG 面积的最大值。

**【解析】**

A(&minus;1, 0)，B(3, 0)，C(0, 3)

直线 AC：过 A(&minus;1,0) 和 C(0,3)

斜率 k = (3&minus;0)/(0&minus;(&minus;1)) = 3

y = 3x + 3

直线 BC：过 B(3,0) 和 C(0,3)

斜率 k = (3&minus;0)/(0&minus;3) = &minus;1

y = &minus;x + 3

设矩形 D(x&sub1;, 0)，G(x&sub2;, 0)，E(x&sub1;, y&sub1;)，F(x&sub2;, y&sub1;)

其中 E 在 AC 上：y&sub1; = 3x&sub1; + 3

F 在 BC 上：y&sub1; = &minus;x&sub2; + 3

&therefore; 3x&sub1; + 3 = &minus;x&sub2; + 3，x&sub2; = &minus;3x&sub1;

矩形宽 = x&sub2; &minus; x&sub1; = &minus;3x&sub1; &minus; x&sub1; = &minus;4x&sub1;

矩形高 = y&sub1; = 3x&sub1; + 3

需要 x&sub1; &le; 0（E 在 AC 上，x &isin; [&minus;1, 0]），x&sub2; &ge; 0

S = (&minus;4x&sub1;)(3x&sub1; + 3) = &minus;12x&sub1;&sup2; &minus; 12x&sub1; = &minus;12(x&sub1;&sup2; + x&sub1;)

= &minus;12(x&sub1; + &frac12;)&sup2; + 3

当 x&sub1; = &minus;&frac12; 时，S 取最大值 3

验证：x&sub1; = &minus;&frac12; &isin; [&minus;1, 0] &check;

**答：** 矩形 DEFG 面积的最大值为 3

**【方法提炼】** 四边形与二次函数综合题，关键是设变量表达矩形边长，建立面积的二次函数，配方求最值。注意变量的取值范围要满足几何约束。

---

## 方法总结

| 题型 | 核心方法 | 易错点 | 难度 |
|------|----------|--------|------|
| 矩形性质 | 对角线相等+勾股定理 | 混淆对角线与边的性质 | ⭐ |
| 菱形性质 | 对角线互相垂直+面积公式 | 面积公式记错为底&times;高 | ⭐ |
| 正方形性质 | 全等三角形转移角 | 忽略正方形的对称性 | ⭐⭐ |
| 折叠问题 | 折叠前后全等+勾股列方程 | 忘记折叠对应边相等 | ⭐⭐ |
| 动点问题 | 分类讨论+勾股定理 | 漏掉等腰三角形的情况 | ⭐⭐ |
| 菱形面积 | 面积等积法 | 不会用面积法转化 | ⭐⭐⭐ |
| 综合证明 | 平行且相等判定平行四边形 | 判定条件不充分 | ⭐⭐⭐ |
| 截长补短 | 构造全等三角形 | 不会作辅助线 | ⭐⭐⭐ |
| 旋转全等 | 旋转90&deg;构造全等 | 旋转后角的关系算错 | ⭐⭐⭐⭐ |
| 二次函数综合 | 设变量建函数+配方求最值 | 几何约束转化为变量范围出错 | ⭐⭐⭐⭐ |

**解题通法：**

1. **判定问题**：记住五种判定方法（定义 + 两组对边平行 + 一组对边平行且相等 + 对角线互相平分 + 两组对边分别相等）
2. **性质问题**：矩形（直角 + 等对角线）、菱形（等边 + 垂直对角线）、正方形（全部性质）
3. **综合证明**：先判定特殊四边形，再利用性质推导
4. **动点折叠**：设变量 &rarr; 表达几何量 &rarr; 列方程 &rarr; 求解验证
5. **压轴综合**：几何性质 + 代数运算结合，注意变量范围
