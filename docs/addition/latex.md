---
sidebar: auto
---

# LaTeX

LaTeX是一种基于ΤΕΧ的排版系统，由美国计算机学家**莱斯利·兰伯特**（Leslie Lamport）在20世纪80年代初期开发。利用这种格式可以生成**复杂表格**和**数学公式**，这个笔记的重点就是教你如何利用LaTeX**排版数学公式**

$$
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c}, & x<3 \\
\pi, & x=3 \\
\int_a^{3b}x_{ij}+e^2 \mathrm{d}x,& x>3 \\
\end{cases}\tag{1.1}
$$

你也想写出这样的公式？是的，你没有看错。上面这些公式并不是图片，而是用一种更为优雅的方式产生——LaTeX

你可以通过LaTeX代码优雅的写出这些高印刷质量的公式，就像这样

```latex
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c}, & x<3 \\
\pi, & x=3 \\
\int_a^{3b}x_{ij}+e^2 \mathrm{d}x,& x>3 \\
\end{cases}
```

不要着急，这其实很简单，只需要花费三十分钟的时间看完这篇笔记，你也可以优雅的写出这些数学公式

首先推荐一个网站 [在线LaTeX公式编辑器](https://www.latexlive.com/) 你可以一边学习，一边在这里测试你学到的东西，这样可以帮助你更快，更轻松的理解LaTeX

那我们开始吧！

## **1.一些简单的公式**

输入 `f(x) = a+b` 

显示：

$$
f(x) = a+b
$$

像这样简单的公式只需要像平时一样用键盘输入即可

## **2.运算符号与字母**

你的键盘并不能打出乘号，除号，点乘 等符号你可以使用LaTeX代码打出这些符号

$$
x-2\div 3\times 4=y + x\cdot y
$$

LaTeX代码如下,除号用\div表示，乘号用\times表示，点乘用\codt表示，而加号，减号，等于号可以用键盘打出，那么就不需要用LaTeX来表示了

```latex
x-2\div 3\times 4=y + x\cdot y
```

除了基本运算符号，还有更多符号在下面的列表里，由于内容太多就不一一介绍了，具体按照自己需求查看下表内容

- **常用数学符号**
    
   | Property | LaTeX  | 符号  | LaTeX | 符号   | LaTeX|
    | --- | --- | --- | --- | --- | --- |
    | + | + | ≈ | \approx | ⇀(向量) | \vec{} |
    | - | - | Δ | \Delta | ∑ | \sum |
    | × | \times | ∞ | \infty | ∫ | \int |
    | ÷ | \div | α | \alpha | ∮ | \oint |
    | ± | \pm | β | \beta | ∬ | \iint |
    | ⋃ | \cup | γ | \gamma | ∭ | \iiint |
    | ⋂ | \cap | τ | \tau | ∯ | \oiint |
    | ∁ | \complement | φ | \varphi | ∰ | \oiiint |
    | < | < | λ | \lambda | lim | \lim |
    | > | > | ρ | \rho | ⋁ | \bigvee |
    | = | = | π | \pi | ⋀ | \bigwedge |
    | ≤ | \le | ξ | \xi | ⋃ | \bigcup |
    | ≥ | \ge | ν | \nu | ⋂ | \bigcap |
    | ⊆ | \subseteq | μ | \mu | ∏ | \prod |
    | ∈ | \in | η | \eta | ∐ | \coprod |
    | ∅ | \emptyset | ψ | \Psi | ∂ | \partial |
    | ∵ | \because | Ω | \Omega | ∅ | \phi |
    | ∴ | \therefore | ·（点乘） | \cdot | ε | \varepsilon |
    | ∀ | \forall | ℏ | \hbar | σ | \sigma |
    | ∃ | \exists | δ | \delta | Φ | \Phi |
    |  |  | ω | \omega | ∇ | \nabla |
- ****希腊字母 Greek alphabet****
    
    
    | 小写 | LaTeX | 读音 | 大写 | LaTeX  | 读音  |
    | --- | --- | --- | --- | --- | --- |
    | α | \alpha | /ˈælfə/ | Γ | \Gamma | /ˈɡæmə/ |
    | β | \beta | /ˈbiːtə/, US: /ˈbeɪtə/ | Δ | \Delta | /ˈdɛltə/ |
    | γ | \gamma | /ˈɡæmə/ | Θ | \Theta | /ˈθiːtə/ |
    | δ | \delta | /ˈdɛltə/ | Λ | \Lambda | /ˈlæmdə/ |
    | ϵ | \epsilon | /ˈɛpsɪlɒn/ | Ξ | \Xi | /zaɪ, ksaɪ/ |
    | ε | \varepsilon | /ˈɛpsɪlɒn/ | Π | \Pi | /paɪ/ |
    | ζ | \zeta | /ˈzeɪtə/ | Σ | \Sigma | /ˈsɪɡmə/ |
    | η | \eta | /ˈeɪtə/ | Υ | \Upsilon | /ˈʌpsɪlɒn/ |
    | θ | \theta | /ˈθiːtə/ | Φ | \Phi | /faɪ/ |
    | ϑ | \vartheta | /ˈθiːtə/ | Ψ | \Psi | /psaɪ/ |
    | ι | \iota | /aɪˈoʊtə/ | Ω | \Omega | /oʊˈmeɪɡə/ |
    | κ | \kappa | /ˈkæpə/ | ω | \omega | /oʊˈmeɪɡə/ |
    | λ | \lambda | /ˈlæmdə/ | ψ | \psi | /psaɪ/ |
    | μ | \mu | /mjuː/ | χ | \chi | /kaɪ/ |
    | ν | \nu | /njuː/ | φ | \varphi | /faɪ/ |
    | ξ | \xi | /zaɪ, ksaɪ/ | ϕ | \phi | /faɪ/ |
    | o | o | /ˈɒmɪkrɒn/ | υ | \upsilon | /ˈʌpsɪlɒn/ |
    | π | \pi | /paɪ/ | τ | \tau | /taʊ, tɔː/ |
    | ϖ | \varpi | /paɪ/ | ς | \varsigma | /ˈsɪɡmə/ |
    | ρ | \rho | /roʊ/ | σ | \sigma | /ˈsɪɡmə/ |
    | ϱ | \varrho | /roʊ/ |  |  |  |

    **注意:** MathJax支持的大写希腊字母有限，如需其他（如大写Alpha），可使用**罗马体**转换，如`\mathrm{A}`表示大写Alpha：A。
    
    - ****集合 Sets****
    
    
    | 图标 | LaTeX | 图标 1 | LaTeX 1 |
    | --- | --- | --- | --- |
    | ∁ | \complement | ⊏ | \sqsubset |
    | ∅ | \emptyset | ⊃ | \supset |
    | ∅ | \varnothing | ⋑ | \Supset |
    | ∈ | \in | ⊐ | \sqsupset |
    | ∉ | \notin | ⊆ | \subseteq |
    | ∋ | \ni | ⊈ | \nsubseteq |
    | ∩ | \cap | ⊊ | \subsetneq |
    | ⋒ | \Cap | ⊊ | \varsubsetneq |
    | ⊓ | \sqcap | ⊑ | \sqsubseteq |
    | ⋂ | \bigcap | ⊇ | \supseteq |
    | ∪ | \cup | ⊉ | \nsupseteq |
    | ⋓ | \Cup | ⊋ | \supsetneq |
    | ⊔ | \sqcup | ⊋ | \varsupsetneq |
    | ⋃ | \bigcup | ⊒ | \sqsupseteq |
    | ⨆ | \bigsqcup | ⫅ | \subseteqq |
    | ⊎ | \uplus | ⊈ | \nsubseteqq |
    | ⨄ | \biguplus | ⫋ | \subsetneqq |
    | ∖ | \setminus | ⫋ | \varsubsetneqq |
    | ∖ | \smallsetminus | ⫆ | \supseteqq |
    | × | \times | ⊉ | \nsupseteqq |
    | ⊂ | \subset | ⫌ | \supsetneqq |
    | ⋐ | \Subset | ⫌ | \varsupsetneqq |
    
- ****希伯来字母 Hebrew alphabet****
    
    
    | 图标 | LaTeX | 英文 |
    | --- | --- | --- |
    | ℵ | \aleph | aleph |
    | ℶ | \beth | beth |
    | ℷ | \gimel | gimel |
    | ℸ | \daleth | daleth |

- ****几何符号 Geometric symbols****
    
    
    | 图标 | LaTeX | 图标  | LaTeX  |
    | --- | --- | --- | --- |
    | ∥ | \parallel | ◊ | \lozenge |
    | ∦ | \nparallel | ⧫ | \blacklozenge |
    | ∥ | \shortparallel | ★ | \bigstar |
    | ∦ | \nshortparallel | ◯ | \bigcirc |
    | ⊥ | \perp | △ | \triangle |
    | ∠ | \angle | △ | \bigtriangleup |
    | ∢ | \sphericalangle | ▽ | \bigtriangledown |
    | ∡ | \measuredangle | △ | \vartriangle |
    | 45∘ | 45^\circ | ▽ | \triangledown |
    | ◻ | \Box | ▴ | \blacktriangle |
    | ◼ | \blacksquare | ▾ | \blacktriangledown |
    | ⋄ | \diamond | ◂ | \blacktriangleleft |
    | ◊ | \Diamond \lozenge | ▸ | \blacktriangleright |
- ****逻辑符号 Logic symbols****
    
    
    | 图标 | LaTeX | 图标  | LaTeX  |
    | --- | --- | --- | --- |
    | ∀ | \forall | ¬ | \neg |
    | ∃ | \exists | ⧸R | \not\operatorname{R} |
    | ∄ | \nexists | ⊥ | \bot |
    | ∴ | \therefore | ⊤ | \top |
    | ∵ | \because | ⊢ | \vdash |
    | & | \And | ⊣ | \dashv |
    | ∨ | \lor | ⊨ | \vDash |
    | ∨ | \vee | ⊩ | \Vdash |
    | ⋎ | \curlyvee | ⊨ | \models |

## 3.上下标

$$
a_{ij}^{2} + b^3_{2}=x^{t} + y' + x''_{12}
$$

_{}表示下标，{}括号里写下标内容、^{}表示上标，{}括号里写上标内容，但上下标内容只有一个字符时，可以不用大括号括起来；单引号’表示求导。

```latex
a_{ij}^{2} + b^3_{2}=x^{t} + y'tex
```

如果想在$x$前面显示上下标，如下，可以把$x$放在_{}和^{}后面

$$
_{a}^{b}x
$$

```latex
_{a}^{b}x
```

如何把上下标放在正上下方呢? 可以用\limits_{}^{},前一个括号里是下标，后一个括号里是上标，\limits这个符号是用来表示数学里的范围，不是所有的符号在运算中需要范围，所以这种方式只对一些有可能需要定义范围的特定的符号有效(例如，\int，\prod，\bigcap，\bigcup，\sum，\oint，\lim，\coprod)

$$
\int\limits_{a}^{b} 
$$

```latex
\int\limits_{a}^{b}
```

还有一种其方法适用于所有符号,但这种方式并不兼容所有可以使用LaTeX的软件


```latex
\sideset{1}{1}X_a^b
```

矢量物理中有一个很重要的，例如a的单位矢量，一般写作$\hat{a}$,这个符号像不像a带了一顶帽子？没错，它就是“a先生”的“帽子”帽子的英文为hat，所以我们可以在LaTeX中用\hat{a}来表示$\hat{a}$

## 4.根号分式

$$
\sqrt{x} + \sqrt{x^{2}+\sqrt{y}} = \sqrt[3]{k_{i}} - \frac{x}{m}
$$

```latex
\sqrt{x} + \sqrt{x^{2}+\sqrt{y}} = \sqrt[3]{k_{i}} - \frac{x}{m}
```

\sqrt{}表示平方根，括号里写根号下的内容

\sqrt[n]{}表示n次方根，[]里填写数字是几就为代表根式是几次方根例如\sqrt[3]{x}就表示$\sqrt[3]{x}$

\frac{}{}表示分式,前一个括号里是分子，后一个括号里是分母。也可以使用\cfrac{}{}，区别在于比前者字号稍大

## 5.向量

$$
\vec{a} + \overrightarrow{AB} + \overleftarrow{DE}
$$

\vec表示向量，\overrightarrow表示箭头向右的向量，\overleftarrow表示箭头向左的向

```latex
\vec{a} + \overrightarrow{AB} + \overleftarrow{DE}
```

## 6.积分、极限、求和、乘积

$$
\lim_{x \to \infty} x^2_{22} - \int_{1}^{5}x\mathrm{d}x + \sum_{n=1}^{20} n^{2} = \prod_{j=1}^{3} y_{j}  + \lim_{x \to -2} \frac{x-2}{x}
$$

 \int表示积分，\lim表示极限， \sum表示求和，\prod表示乘积

\lim_{x \to 0}表示$\lim_{x \to 0}$ \to代表$\to$ 如果把0改为\infty那么就会变成$\lim_{x \to \infty}$

```latex
\lim_{x \to \infty} x^2_{22} - \int_{1}^{5}x\mathrm{d}x + \sum_{n=1}^{20} n^{2} = \prod_{j=1}^{3} y_{j}  + \lim_{x \to -2} \frac{x-2}{x}
```

## **7.矩阵**

$$
\begin{pmatrix}    a_{11} & \cdots & a_{1n} \\    \vdots & \ddots & \vdots \\    a_{m1} & \cdots & a_{mn}  \end{pmatrix} 
$$

```latex
\begin{pmatrix}  
  a_{11} & \cdots & a_{1n} \\  
  \vdots & \ddots & \vdots \\  
  a_{m1} & \cdots & a_{mn}  
\end{pmatrix}
```

是不是看傻了，没关系，我们只需要把代码拆开一部分一部分看就可以

如果我们把中间的内容去掉，替换成x，你会发现这其实就是一个括号里放了一个x，那这个x其实就代表那些矩阵，但这个括号可不是一般的括号

```latex
\begin{pmatrix}  
x
\end{pmatrix}
```

$$
\begin{pmatrix}  
   
  x
 
\end{pmatrix}
$$

然后我们输入第一行矩阵，显示如右。注意，这里的&起到空格的作用，只在矩阵可行，一般情况**\+空格**可实现空格效果，在LaTeX中如果只输入空格是不会有空格的效果的，当然这个方法并不标准，是我自己摸索出来的，标准的空格如下，但比较麻烦。

- 标准的空格
    

    

```latex
\begin{pmatrix}  
 a_{11} & \cdots & a_{1n}
\end{pmatrix}
```

$$
\begin{pmatrix}  
 a_{11} & \cdots & a_{1n}
\end{pmatrix}
$$

再输入第二行矩阵，注意，第一行尾部要添加\\来表示换行。显示如右

```latex
\begin{pmatrix}  
  a_{11} & \cdots & a_{1n} \\  
  \vdots & \ddots & \vdots 
\end{pmatrix}
```

$$
\begin{pmatrix}  
  a_{11} & \cdots & a_{1n} \\  
  \vdots & \ddots & \vdots  
\end{pmatrix}
$$

最后一行矩阵同上方法，即可得到开头那个整的矩阵。**再此提醒要用\\换行！！！**

那么其他形式的矩阵怎么办呢？如下图，把括号里的蓝色字体改成表格里其他形式的就行

\begin{pmatrix} 

 \end{pmatrix}



## 8.公式**编号**

$$
f(x) = \log_{a}{b}-c\tag{1.1}
$$

代码如下，其实只需要在你的公式后添加\tag{}，括号里填写编号。

```latex
f(x) = \log_{a}{b}-c \tag{1.1}
```

## 9.公式拆分/三角函数

$$
\begin{split}\cos 2x &= \cos^2x - \sin^2x \\&=2\cos^2x-1\end{split}
$$

\sin是正弦  \cos是余弦  \tan是正切，你可能会好奇这些符号其实是可以用键盘直接打出来的，那么为什么还要设立一个单独的符号呢？那就让我们一探究竟吧，如果我们用键盘写出sin，那么在LaTeX下显示是$sin$但如果我们用符号\sin那么在LaTeX下显示是$\sin$ 你会发现它们在字体上是有不同的，而且\sin只表示一个符号但sin表示三个符号，这在LaTeX排布时会略显差异。

```latex
\begin{split}
\cos 2x 
&= \cos^2x - \sin^2x \\
&=2\cos^2x-1
\end{split}
```

同样是换行，但想要达到这种等号对齐的效果必须在每个要对其的等于号前加上&

(这是&的第二个用法)

## 10.方程组

$$
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c} & x<3 \\
\pi & x=3 \\
\int_a^{3b}x_{ij}+e^2 \mathrm{d}x& x>3 \\
\end{cases}
$$

是不是对这个方程组很熟悉，没错这就是开头那个，前面学了那么多你应该知道大概要怎么做了吧，不过还欠点火候，我们还有最后一点东西没学完

```latex
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c}, & x<3 \\
\pi, & x=3 \\
\int_a^{3b}x_{ij}+e^2 \mathrm{d}x,& x>3 \\
\end{cases}
```

这就是这个方程组的代码，不用担心，它并不复杂，我们还是用之前的方法，来一部分一部分看他

```latex
f(x) = \begin{cases}

\end{cases}
```

$$
f(x) = \begin{cases}

\end{cases}
$$

\begin{cases} \end{cases} 其实就是一个花括号的格式，只需要在里面填写方程和条件然后用\\换行把每个方程分开即可，这样就可以得到那个方程组。让我们来看下一步

```latex
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c} & x<3 

\end{cases}
```

$$
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c} & x<3 

\end{cases}
$$

现在我们把第一个方程放在括号里了，这里要注意在方程后添加条件先在方程后写&然后再写条件

（这是&的第三种用法）

我们在第一个方程后添加\\换行，然后写入第二行方程，如下

```latex
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c} & x<3 \\
\pi & x=3 \\
\end{cases}
```

$$
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c} & x<3 \\
\pi & x=3 \\
\end{cases}
$$

同上方式，你就可以写出那个完整的方程组了。

好的，现在你已经可以通过LaTeX写出绝大多数数学公式了，它一定会成为你数理学习路上的好帮手

## **11.狄拉克符号**

$$
\left \langle \psi \right | 
\left| \psi  \right \rangle 
\left \langle \psi  | \psi  \right \rangle
$$

```latex
\left \langle \psi \right | 
\left| \psi  \right \rangle 
\left \langle \psi | \psi \right \rangle
```

\left \langle $\psi$ \right | 表示$\left \langle \psi \right |$

\left |  $\psi$  \right\rangle 表示 $\left| \psi  \right \rangle$ 

\left \langle $\psi$  |  $\psi$ \right \rang$\left \langle \psi | \psi \right \rangle$

这看起来也许有些复杂，如下，我把它们性质整理了一下

根据我的观察，我总结了一些经验，\left 表示在内容左边 \right表示在内容右边，这两个必须存在 ，中两个中间就是填写内容的地方，\left和\right后面必须跟着其他符号，不能为空。\langle和 \rangle分别代表$\left \langle \right \rangle$，符号|可以通过Shift+\ 打出来

## 12.字体

例如我们数学中的傅里叶变换$\mathcal{F}$和拉普拉斯变换$\mathcal{L}$,你知道这些符号都是怎么打出来的吗？

其实它们都是换了字体的大写F和L，我们在数学和物理的学习中也是会经常用到这些符号

$\mathscr{L}$ \mathscr{L}      $\mathcal{L}$ \mathcal{L}

$\mathscr{F}$ \mathscr{L}      $\mathcal{F}$ \mathcal{F}

以上是它们对应的LaTeX,这两种不同字体的符号在教科书上都能看到，除了以上这两种，还有其他的字体，例如：

$$
\mathbf{ABCDEFGHRGKLMNOPQRSTUVWXYZ} \\ \mathbf{abcdefghrgklmnopqrstuvwxyz} 
$$

这里使用的字体为\mathbf{}，这是一个加粗字体

$$
\mathit{ABCDEFGHRGKLMNOPQRSTUVWXYZ} \\ \mathit{abcdefghrgklmnopqrstuvwxyz} 
$$

这里使用的字体是\mathit{}，这是一个斜体字体

$$
\mathcal{ABCDEFGHRGKLMNOPQRSTUVWXYZ} \\ \mathcal{abcdefghrgklmnopqrstuvwxyz}
$$

这里使用的字体是\mathcal，这是一个手写体字体

最后展示一个与数学毫不相关的

$$
\color{Blue}\mathfrak{ABCDEFGHRGKLMNOPQRSTUVWXYZ} \\ \color{Blue}\mathfrak{abcdefghrgklmnopqrstuvwxyz}
$$

这里使用的字体是德文尖角体，这个字体用\mathfrak{}。除此之外，你还发现了什么，没错，与之前不同的是这里的字是蓝色的。LaTeX可以定义字的颜色，你只需要在字前加一个\color{}括号里输入颜色名称即可，代码如下

```latex
\color{Blue}\mathfrak{ABCDEFGHRGKLMNOPQRSTUVWXYZ} \\ 
\color{Blue}\mathfrak{abcdefghrgklmnopqrstuvwxyz}
```

你可能会疑惑，你并不知道所有颜色的名称，而且并不是所有颜色都有名称，那么我们如何让字显示出我们想要的颜色？用我们常说的RGB，也就是三原色，理论上它们可以搭配出成千上万种颜色，总有一款是你喜欢的那么如何用LaTeX表示三原色呢？用`\color[RGB]{0,0,0}`最大值为225，最小值为0，值越大颜色占比越多，第一个数代表红色的值，第二个数代表绿色的值，第三个数代表蓝色的值，其实是按照RGB的顺序来的，R代表Red（红色），G代表Green（绿色），B代表Blue（蓝色）。

在一堆字里，我只想定义个别字的颜色怎么办我们可以把字用{}括号括起来

```latex
\color{red}{abc}
或者
{\color{Blue}abc}
两者没有区别（为了比较明显我把两种方式的字设成了不同颜色）
```

$$
\color{red}{abc}
$$

$$
{\color{Blue}abc}
$$

## **13.大小**

LaTeX不仅可以定义字体，颜色，还可以定义字的大小。虽然这在数学公式中并不一定能用上，但我还是提一嘴，以备不时之需

一号 \Huge ${\Huge\int f^{-1}(x-x_a)dx }$

二号 \huge  ${\huge\int f^{-1}(x-x_a)dx }$

三号 \LARGE ${\LARGE \int f^{-1}(x-x_a)dx }$

四号 \Large  ${\Large\int f^{-1}(x-x_a)dx }$

小四号 \large ${\large\int f^{-1}(x-x_a)dx }$zh

五号(默认)    $\int f^{-1}(x-x_a)dx$

小五号\small ${\small \int f^{-1}(x-x_a)dx }$ 

六号 \footnotesize  ${\scriptsize \int f^{-1}(x-x_a)dx }$
小六号 \scriptsize ${ \scriptsize \int f^{-1}(x-x_a)dx }$
七号 \tiny  ${\tiny\int f^{-1}(x-x_a)dx }$

除了字体大小还有字体的样式，放在下面提供参考

```latex
\begin{array}{l} 
  {\displaystyle \int f^{-1}(x-x_a)dx} \\
  {\textstyle \int f^{-1}(x-x_a)dx} \\
  {\scriptstyle \int f^{-1}(x-x_a)dx\\
  {\scriptscriptstyle \int f^{-1}(x-x_a)dx}
\end{array}
```

$$
\begin{array}{l} 
  {\displaystyle \int f^{-1}(x-x_a)dx} \\
  {\textstyle \int f^{-1}(x-x_a)dx} \\
  {\scriptstyle \int f^{-1}(x-x_a)dx} \\
  {\scriptscriptstyle \int f^{-1}(x-x_a)dx}
\end{array}
$$

## 14.化学方程式

以上内容足够你打出你所能在书本上见到的所有数学公式，既然如此，我们不如挑战一下更具挑战的化学方程式，让我们试试看吧！

$$
SO_4^{2-}+Ba^{2+}\to BaSO_4\downarrow
$$

```latex
SO_4^{2-}+Ba^{2+}\to BaSO_4\downarrow
```

这个是我用上述所学到的LaTeX知识所打出来的，而下面这个是我用扩展方法打出来的，两者字体和箭头略有不同。

$$
\ce{SO4^2- + Ba^2+ -> BaSO4 v} 
$$

```latex
\ce{SO4^2- + Ba^2+ -> BaSO4 v}
```

下面这个用扩展方法打出来的化学方程式中沉淀箭头由v代替，字母后的数字自动变为下标，多个上标符号在一块时不需要用{}括起来箭头被->代替,\ce表示启用化学的扩展方法

## 15.参考与赏析

好的，教程到这里就结束了。下面时一些比较复杂的方程，值得慢慢研究，你一定能从中有更多收获。

$$
\begin{array}{l}  
  {\huge \oint}_{\mathbb{L}}^{} \mathbf{E} \cdot \mathrm{d}l=-\cfrac{\mathrm{d}\Phi _{\mathbf{B}}}{\mathrm{d}t }  \\  
  {\huge \oint}_{\mathbb{L}}^{} \mathbf{B} \cdot \mathrm{d}l=\mu_0I+ \mu_0 \varepsilon_0\cfrac{\mathrm{d}\Phi _{\mathbf{E}}}{\mathrm{d}t }   
\end{array} 
$$

```latex
\begin{array}{l}  
  {\huge \oint}_{\mathbb{L}}^{} \mathbf{E} \cdot \mathrm{d}l=-\cfrac{\mathrm{d}\Phi _{\mathbf{B}}}{\mathrm{d}t }  \\  
  {\huge \oint}_{\mathbb{L}}^{} \mathbf{B} \cdot \mathrm{d}l=\mu_0I+ \mu_0 \varepsilon_0\cfrac{\mathrm{d}\Phi _{\mathbf{E}}}{\mathrm{d}t }   
\end{array}
```

$$
\ce{Zn^2+  <=>[+ 2OH-][+ 2H+]  $\underset{\text{amphoteres Hydroxid}}{\ce{Zn(OH)2 v}}$  <=>[+ 2OH-][+ 2H+]  $\underset{\text{Hydroxozikat}}{\ce{[Zn(OH)4]^2-}}$} 
$$

```latex
\ce{Zn^2+  
<=>[+ 2OH-][+ 2H+]  
\underset{\text{amphoteres Hydroxid}}{\ce{Zn(OH)2 v}}  
<=>[+ 2OH-][+ 2H+] 
\underset{\text{Hydroxozikat}}{\ce{[Zn(OH)4]^2-}}}
```

$$
\begin{array}{c}   a \gt b \gt 0,n \in N^{\ast},n \gt 1 \\   \Rightarrow a^{n}\gt b^{n}, \sqrt[n]{a}\gt \sqrt[n]{b} \end{array}
$$

```latex
\begin{array}{c} 
  a \gt b \gt 0,n \in N^{\ast},n \gt 1 \\ 
  \Rightarrow a^{n}\gt b^{n}, \sqrt[n]{a}\gt \sqrt[n]{b} 
\end{array}
```

$$
\frac{1}{n^{2}-1}= \frac{1}{2}\left( \frac{1}{n-1}-\frac{1}{n+1}\right) 
$$

```latex
\frac{1}{n^{2}-1}= \frac{1}{2}\left( \frac{1}{n-1}-\frac{1}{n+1}\right)
```