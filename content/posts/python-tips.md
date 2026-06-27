---
title: "Python 实用技巧"
date: 2026-06-26
pinned: true
tags: ["python", "tips"]
categories: ["技术"]
description: "整理几个常用的 Python 技巧，包括列表推导式、字典合并、f-string 调试、海象运算符，提升日常开发效率。"
---

整理几个常用的 Python 技巧，提升开发效率。

## 列表推导式

```python
# 传统写法
squares = []
for x in range(10):
    squares.append(x ** 2)

# 推导式
squares = [x ** 2 for x in range(10)]
```

## 字典合并

```python
# Python 3.9+ 使用 | 运算符
a = {"x": 1, "y": 2}
b = {"y": 3, "z": 4}
merged = a | b  # {'x': 1, 'y': 3, 'z': 4}
```

## f-string 调试

```python
# Python 3.8+ 使用 = 修饰符
name = "qcheng19"
count = 42
print(f"{name=}, {count=}")
# 输出: name='qcheng19', count=42
```

## 海象运算符

```python
# Python 3.8+ 在表达式中赋值
if (n := len(data)) > 10:
    print(f"数据过长: {n} 条")
```

这些技巧在日常开发中非常实用。
