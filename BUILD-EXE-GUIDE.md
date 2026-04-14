# 如何构建 Windows 桌面版 (.exe)

## 准备工作

1. 注册 GitHub 账号（如果还没有）
2. 在 GitHub 上创建一个新仓库（Public 或 Private 均可）

## 步骤

### 第一步：上传代码

把这个文件夹的**所有内容**推送到你刚创建的 GitHub 仓库。
如果你不熟悉 git 命令行，也可以直接用 GitHub 网页界面上传，或者使用
GitHub Desktop 桌面客户端（https://desktop.github.com）。

### 第二步：GitHub Actions 自动构建

推送代码后，GitHub 会自动开始构建。你可以：

1. 打开你的 GitHub 仓库
2. 点击顶部 **Actions** 标签
3. 找到 **Build Windows Desktop App** 这个工作流
4. 等待构建完成（大约 5-10 分钟）

### 第三步：下载 .exe 文件

构建完成后：

1. 点击刚刚完成的工作流任务
2. 滚动到页面底部 **Artifacts** 区域
3. 点击 **QRS-Windows** 下载压缩包
4. 解压后有两个文件：
   - QRS Setup X.X.X.exe — 安装版（有安装向导，可选安装目录）
   - QRS-portable-X.X.X.exe — 绿色便携版（直接双击运行，无需安装）

## 文件说明

- desktop/main.js — Electron 主进程文件
- desktop/package.json — 桌面版依赖和打包配置
- .github/workflows/build-desktop.yml — GitHub Actions 自动构建脚本

