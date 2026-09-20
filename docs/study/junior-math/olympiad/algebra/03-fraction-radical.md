---
title: 第 3 章 分式与根式
date: 2026-09-05
tags:
  - 初中数学
  - 奥数
  - 代数
---

# 第 3 章 分式与根式

> 分式和根式的竞赛玩法高度一致：**别按部就班通分/开方，先找结构**。裂项是分式的头号武器，换元是根式的头号武器——两者背后都是" telescoping（望远镜）求和"这一个思想。

## 知识点精讲

### 1. 分式基本性质（一句话版）

分子分母同乘（除）一个**非零**整式，分式值不变。所有变形技巧都是它的应用，唯一禁忌是**分母不得为零**——竞赛解答里丢一句"$x \ne 0$（保证分母有意义）"是要扣分的。

### 2. 裂项公式（分式求和之王）

$$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1} \qquad \text{（相差 1）}$$

$$\frac{1}{n(n+k)} = \frac{1}{k}\left( \frac{1}{n} - \frac{1}{n+k} \right) \qquad \text{（相差 } k \text{，注意配 } \frac{1}{k} \text{）}$$

推广到 $k$ 个连续数之积（第 8 章再展开）。裂项后中间项**正负相消**，只剩首尾。

### 3. 倒数变换（对称分式的条件求值）

已知 $x + \dfrac{1}{x} = t$（$t$ 已知）：

$$x^2 + \frac{1}{x^2} = t^2 - 2, \qquad x^3 + \frac{1}{x^3} = t^3 - 3t$$

来源：两边平方 / 立方（利用 $x \cdot \frac1x = 1$）。

### 4. 复合二次根式（"凑完全平方"）

$$\sqrt{a + 2\sqrt{b}} \text{ 型：找 } m + n = a,\ mn = b \text{，则} \sqrt{a + 2\sqrt b} = \sqrt{(\sqrt m + \sqrt n)^2} = \sqrt m + \sqrt n$$

本质：把根号里的式子**逆用完全平方公式**。

### 5. 分母有理化（望远镜结构）

$$\frac{1}{\sqrt{n+1} + \sqrt{n}} = \frac{\sqrt{n+1} - \sqrt n}{(n+1) - n} = \sqrt{n+1} - \sqrt n$$

连加时中间全部相消——这是根式版的裂项。

## 经典例题

### 例 1（经典赛题改编）

计算：$\dfrac{1}{1 \times 2} + \dfrac{1}{2 \times 3} + \dfrac{1}{3 \times 4} + \cdots + \dfrac{1}{99 \times 100}$。

::: details 查看解答

裂项：$\dfrac{1}{k(k+1)} = \dfrac{1}{k} - \dfrac{1}{k+1}$。

$$S = \left(1 - \frac12\right) + \left(\frac12 - \frac13\right) + \cdots + \left(\frac{1}{99} - \frac{1}{100}\right) = 1 - \frac{1}{100} = \boxed{\frac{99}{100}}$$

**方法提炼：** 望远镜求和：只剩**首项与末项**。首尾都要写清楚。
:::

### 例 2（经典赛题改编）

计算：$\dfrac{1}{2 \times 4} + \dfrac{1}{4 \times 6} + \dfrac{1}{6 \times 8} + \cdots + \dfrac{1}{98 \times 100}$。

::: details 查看解答

相邻因子相差 2，用推广式：

$$\frac{1}{k(k+2)} = \frac{1}{2}\left( \frac{1}{k} - \frac{1}{k+2} \right)$$

$$S = \frac12 \left[ \left(\frac12 - \frac14\right) + \left(\frac14 - \frac16\right) + \cdots + \left(\frac{1}{98} - \frac{1}{100}\right) \right] = \frac12 \left( \frac12 - \frac{1}{100} \right) = \frac12 \times \frac{49}{100} = \boxed{\frac{49}{200}}$$

**方法提炼：** 差 $k$ 的裂项**别忘了系数 $\frac1k$**——这是最常见的丢分点（本期末项差 100 − 2 = 98，两数差与步长别混淆）。
:::

### 例 3（经典赛题改编）

已知 $x + \dfrac{1}{x} = 5$，求 $x^2 + \dfrac{1}{x^2}$ 与 $x^3 + \dfrac{1}{x^3}$。

::: details 查看解答

平方：$x^2 + 2 + \dfrac{1}{x^2} = 25 \Rightarrow x^2 + \dfrac{1}{x^2} = \boxed{23}$。

立方：$x^3 + 3x + \dfrac{3}{x} + \dfrac{1}{x^3} = 125 \Rightarrow x^3 + \dfrac{1}{x^3} = 125 - 3 \times 5 = \boxed{110}$。

**方法提炼：** 倒数结构先**平方/立方再减常数**：平方减 2，立方减 $3t$。不需要解出 $x$（而且此方程的 $x$ 是无理数）。
:::

### 例 4（经典赛题改编）

化简：$\sqrt{7 + 4\sqrt{3}}$。

::: details 查看解答

目标是凑 $(\sqrt m + \sqrt n)^2 = m + n + 2\sqrt{mn}$：需 $m + n = 7$，$mn = 3$（因为 $4\sqrt3 = 2\sqrt{12}$，即 $2\sqrt{mn} = 2\sqrt{12}$，$mn = 12$）。

$m + n = 7$，$mn = 12$ → $m = 3, n = 4$：

$$\sqrt{7 + 4\sqrt3} = \sqrt{(2 + \sqrt3)^2} = \boxed{2 + \sqrt3}$$

**方法提炼：** 系数 4 先拆成 $2\sqrt{12}$；分解 $mn$ 与 $m+n$ 就是十相乘——复合根式化简 = **逆用完全平方**。
:::

### 例 5（初中联赛风格）

计算：$\dfrac{1}{1 + \sqrt2} + \dfrac{1}{\sqrt2 + \sqrt3} + \dfrac{1}{\sqrt3 + \sqrt4} + \cdots + \dfrac{1}{\sqrt{2024} + \sqrt{2025}}$。

::: details 查看解答

每项分母有理化：

$$\frac{1}{\sqrt{n+1} + \sqrt n} = \sqrt{n+1} - \sqrt n$$

$$S = (1 - \sqrt2) + (\sqrt2 - \sqrt3) + \cdots + (\sqrt{2024} - \sqrt{2025})$$

中间全部相消，剩 $1 - \sqrt{2025} = 1 - 45 = \boxed{-44}$。

**方法提炼：** 根式望远镜：分母是"相邻根式之和"时，条件反射做有理化，答案 = 首根式 − 末根式。
:::

### 例 6（希望杯风格）

已知 $\dfrac{a}{b} = \dfrac{c}{d} = \dfrac{e}{f} = \dfrac{2}{3}$，求 $\dfrac{2a - c + 5e}{2b - d + 5f}$ 的值。

::: details 查看解答

**设 $k$ 法**：设 $a = 2k_1$？不行——等比定理的正规姿势：由条件设

$$a = 2t,\ b = 3t;\quad c = 2s,\ d = 3s;\quad e = 2u,\ f = 3u$$

代入（分子分母同用对应比例）：

$$\frac{2(2t) - 2s + 5(2u)}{2(3t) - 3s + 5(3u)} = \frac{4t - 2s + 10u}{6t - 3s + 15u} = \frac{2(2t - s + 5u)}{3(2t - s + 5u)} = \boxed{\frac{2}{3}}$$

（分母非零：$2t - s + 5u = 0$ 时分母为 0，此时原分式无意义，故结论对所有有意义情形成立。）

**方法提炼：** 连比条件 = 所有字母都能写成"基准分 × 各自参数"——分子分母的线性组合**保持同基准**时比值不变。
:::

## 习题

1. 计算：$\dfrac{1}{1 \times 3} + \dfrac{1}{3 \times 5} + \dfrac{1}{5 \times 7} + \cdots + \dfrac{1}{99 \times 101}$。
2. 已知 $x + \dfrac{1}{x} = 4$，求 $x^2 + \dfrac{1}{x^2}$ 与 $\left(x - \dfrac{1}{x}\right)^2$。
3. 化简：$\sqrt{9 + 4\sqrt5}$。
4. 计算：$\dfrac{1}{\sqrt2 + \sqrt3} + \dfrac{1}{\sqrt3 + \sqrt4} + \cdots + \dfrac{1}{\sqrt{2024} + \sqrt{2025}}$（注意本题首项与例 5 不同）。
5. 已知 $\dfrac{x}{3} = \dfrac{y}{4} = \dfrac{z}{5}$，求 $\dfrac{x + y + z}{z}$ 的值。
6. 求分式 $\left( \dfrac{1}{x} - \dfrac{1}{x+1} \right) \div \left( \dfrac{1}{x^2} - \dfrac{1}{(x+1)^2} \right)$ 的值（结果化到最简）。
7. 求 $\dfrac{\sqrt5 + 1}{\sqrt5 - 1}$ 的整数部分。
8.（压轴）已知 $x = \dfrac{\sqrt3 - 1}{\sqrt3 + 1}$，$y = \dfrac{\sqrt3 + 1}{\sqrt3 - 1}$，求 $x^2 + xy + y^2$ 的值。

::: details 习题答案与提示

1. 差 2 裂项：$\frac12\left(1 - \frac{1}{101}\right) = \boxed{\dfrac{50}{101}}$。
2. $x^2 + \frac{1}{x^2} = 16 - 2 = \boxed{14}$；$x - \frac1x$ 平方 $= x^2 - 2 + \frac{1}{x^2} = 14 - 2 = \boxed{12}$。
3. $9 + 4\sqrt5 = 9 + 2\sqrt{20}$，$4 + 5 = 9$，$4 \times 5 = 20$ → $\boxed{2 + \sqrt5}$。
4. 首项 $\frac{1}{\sqrt2+\sqrt3} = \sqrt3 - \sqrt2$，望远镜后剩 $\sqrt{2025} - \sqrt2 = \boxed{45 - \sqrt2}$。
5. 设 $x = 3t, y = 4t, z = 5t$：$\frac{12t}{5t} = \boxed{\dfrac{12}{5}}$。
6. 分子 $= \frac{1}{x(x+1)}$；分母 $= \frac{(x+1)^2 - x^2}{x^2(x+1)^2} = \frac{2x+1}{x^2(x+1)^2}$。商 $= \frac{x(x+1)}{2x+1} = \boxed{\dfrac{x^2+x}{2x+1}}$。
7. $\frac{\sqrt5+1}{\sqrt5-1} = \frac{(\sqrt5+1)^2}{4} = \frac{6 + 2\sqrt5}{4} = \frac{3+\sqrt5}{2} \approx 2.618$ → 整数部分 **2**。
8. $x = \frac{(\sqrt3-1)^2}{2} = 2 - \sqrt3$，$y = 2 + \sqrt3$。$xy = 1$，$x + y = 4$。$x^2 + xy + y^2 = (x+y)^2 - xy = 16 - 1 = \boxed{15}$。
:::

## 本节方法小结

- 裂项看**相邻因子之差**：差 1 直接裂，差 $k$ 配 $\frac1k$；望远镜后只剩首尾
- 倒数结构：$x + \frac1x = t$ → 平方减 2、立方减 $3t$；$(x - \frac1x)^2 = t^2 - 4$
- 复合根式 = **逆用完全平方**（$m+n$ 配、$mn$ 配）
- 分母是 $\sqrt{n+1}+\sqrt n$ → 有理化即望远镜
- 连比条件用**设 $k$ 法**；结果与参数无关时自然消掉
