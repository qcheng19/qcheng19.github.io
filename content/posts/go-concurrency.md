---
title: "Go 并发入门"
date: 2026-06-25
tags: ["go", "concurrency"]
categories: ["技术"]
description: "Go 语言的并发模型基于 goroutine 和 channel，简洁而强大。本文介绍 goroutine 和 channel 的基本用法。"
---

Go 语言的并发模型基于 goroutine 和 channel，简洁而强大。

## goroutine

```go
package main

import (
    "fmt"
    "time"
)

func say(s string) {
    for i := 0; i < 3; i++ {
        fmt.Println(s)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    go say("hello")
    say("world")
}
```

## channel

```go
func sum(nums []int, c chan int) {
    total := 0
    for _, n := range nums {
        total += n
    }
    c <- total
}

func main() {
    nums := []int{1, 2, 3, 4, 5}
    c := make(chan int)
    go sum(nums, c)
    result := <-c
    fmt.Println(result)
}
```

goroutine 的开销远小于系统线程，可以轻松创建成千上万个。
