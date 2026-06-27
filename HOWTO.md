# 博客写作与部署指南

## 目录结构

```
blog/
├── content/posts/      ← 文章都在这里，一个 .md 一篇
├── assets/_custom.scss ← 全局样式
├── assets/custom.js    ← 全局脚本
├── layouts/            ← 模板覆盖
└── static/img/         ← 图片等静态资源放这里
```

---

## 1. 写文章

### 创建文件

在 `content/posts/` 下新建 `.md` 文件，文件名就是 URL 路径（建议用英文短横线分隔），例如：

```
content/posts/my-new-post.md   →  https://qcheng19.github.io/posts/my-new-post/
```

### 文章格式

```markdown
---
title: "文章标题"
date: 2026-06-27
tags: ["标签1", "标签2"]
categories: ["分类名"]
description: "一句话摘要，会显示在文章卡片上"
pinned: false         # 设为 true 则置顶
cover: /img/xxx.jpg   # 可选，卡片封面图
---

这里写正文，就是普通 Markdown ...

## 二级标题

- 列表项
- 列表项

​```python
# 代码块自动带复制按钮
print("hello")
​```
```

### 可用字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | ✅ | 文章标题 |
| `date` | ✅ | 日期，格式 `YYYY-MM-DD` |
| `tags` | — | 标签列表，会出现在侧边栏标签云 |
| `categories` | — | 分类列表 |
| `description` | — | 摘要，卡片和列表页展示 |
| `pinned` | — | `true` 则置顶，带 📌 标记 |
| `cover` | — | 卡片封面图路径，图片放 `static/img/` |

---

## 2. 本地预览

```bash
cd d:/code/python/blog
hugo server --noHTTPCache --disableFastRender --ignoreCache
```

浏览器打开 **http://localhost:1313/** ，文件改动后自动刷新。

---

## 3. 推送到 GitHub

```bash
cd d:/code/python/blog
git add .
git commit -m "新文章：xxx"
git push
```

推送后 GitHub Actions 自动构建部署，1~2 分钟后在以下地址生效：

> **https://qcheng19.github.io**

可以在 https://github.com/qcheng19/qcheng19.github.io/actions 查看构建状态。

---

## 4. 常用操作速查

```bash
# 查看状态
git status

# 查看改动内容
git diff

# 如果 push 报错，先拉取再推送
git pull --rebase origin main
git push
```

---

## 5. 克隆到另一台电脑

本仓库使用 **SSH** 方式连接 GitHub（HTTPS 被墙，连不上）：

```bash
git clone git@github.com:qcheng19/qcheng19.github.io.git
cd qcheng19.github.io
```

> 新电脑需先[配置 SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) 并加到 GitHub 账号里。

---

## 6. 常见问题

### git push 报 `Failed to connect to github.com port 443`

这是 HTTPS 被墙了，确认远程地址用的是 SSH：

```bash
git remote -v
# 应该显示 git@github.com:qcheng19/qcheng19.github.io.git
# 如果是 https:// 开头，执行：
git remote set-url origin git@github.com:qcheng19/qcheng19.github.io.git
```
