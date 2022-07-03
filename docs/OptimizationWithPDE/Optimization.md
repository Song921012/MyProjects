---
sidebar_position: 4
---

# Optimization and Programming

## 1. 基础优化理论
Opt in Banach Space

时间和空间Complexity

## 2. 基础规划与典型优化问题
Review[Decison Tree for Optimization Software](http://plato.asu.edu/sub/benchm.html)

<mark>建模与转化</mark>

<mark>算法与优化器</mark>


### 2.1. LP,MILP
线性规划
#### 线性化技巧

[优化模型线性化方法总结 - 知乎](https://zhuanlan.zhihu.com/p/361766549)

#### 算法与优化器
Gurobi, Mosek, Ipopt
### 2.2. QP,MIQP

#### 算法与优化器
Gurobi, Mosek, Ipopt
[osqp/osqp_benchmarks: QP Benchmarks for the OSQP Solver against GUROBI, MOSEK, ECOS and qpOASES](https://github.com/osqp/osqp_benchmarks)
### 2.3. QCP,MIQCP

#### 算法与优化器
Mosek
### 2.4. SOCP, MISOCP

#### 算法与优化器
Gurobi, Mosek
### 2.5. SDP, MISDP
#### 算法与优化器
Mosek
### 2.6. NLP, MINLP
#### 算法与优化器

Ipopt

AmplNLWriter.jl Bonmin, SHOT, Couenne


Kronqvist J, Bernal D E, Lundell A, et al. A review and comparison of solvers for convex MINLP[J]. Optimization and Engineering, 2019, 20(2): 397-455.
### 2.7. Metaheuristic

Optimization.jl
### 2.8. Nonconvex

Nonconvex.jl

## 3. 无约束有约束

### 全局优化：智能算法
见全局优化

线性搜索技术

### 一阶方法
JuliaFirstOrder

FirstOrder Book
### 二阶方法


### 有约束问题
Peanalty

Barrier

Relaxed Peanalty

Augumental Lagrange

## 4. 凸与非凸优化

## 5. 全局优化方法

非凸

智能算法

## 6. 确定与随机优化

## 7. 流形优化

## 8. 独孤九剑

### 8.1. 随机式

### 8.2. Population式

### 8.3. Surrogate式


### 8.4. 转化技巧

<mark>增加变量，增加约束条件</mark>
整数规划变正常规划： sin(pi*x)

$z\leq 0 $ 或者 $ x \leq 0$ : $ z \leq (1-u)*M,  x \leq u*M， u=0,1$ M很大

minmax用任意代替，如特征值用不等号替代

整体换元：分式变等式

Koopman分析




## 9. Composite optimization复合优化
见北大教材第八章



