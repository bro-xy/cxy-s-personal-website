# 陈熙雅个人网站需求变更文档

按最近更新在前记录站主提出的需求、落地内容、验证结果和线上发布状态。同一轮修改可以记录多条需求。已经记录的需求发生调整时，新增一条记录说明变化，便于从 Git 提交回看当时的版本。

## 2026-11-26 重做墙角小花开场画面与动效

- **需求**。站主不满意第一版 Demo 的视觉效果，希望参考 GitHub 上的前端与网页设计 Skill，重新设计开场，并尝试加入动效或 3D。
- **实现**。使用 ImageGen 生成写实的全屏蓝花场景，以 WebP 加入站点。桌面照片和光尘随鼠标产生不同幅度的偏移，进入首页时画面轻微推近后淡出。手机使用竖屏构图。采用 Vercel 的 Web Design Guidelines 和 Web Animation Design 检查对比度、键盘交互、动效节奏和减少动态效果。
- **验证**。生产构建和代码检查通过。浏览器验证了鼠标视差、点花转场、直接浏览、键盘操作、减少动态效果和手机竖屏清晰度。
- **线上状态**。独立 Demo 供预览，待确定是否采用。

<details>
<summary>画面素材提示词</summary>

Photorealistic natural cinematic still, intended as a full-bleed widescreen 16:9 cover photograph for an elegant Chinese personal portfolio entrance. A single real, vivid cornflower-blue chicory blossom on a slim green stalk with just two leaves grows out of a narrow crack at an old plaster wall's meeting with the concrete floor. Blossom and its entire stem in focus, finely detailed blue petals and small textured centre, reasonably large and arresting, centred on the vertical line at 73% from left, bloom centred at about 47% from top, crack and root visible close to bottom-right at 86% down. Strong warm morning light cuts diagonally from upper right across the wall to lower middle with a soft realistic edge. The right-hand light has warm limewash, visible lime plaster texture, small imperfections, and delicate cast shadow from the stem. Left 55% of the frame remains mostly a calm shadowed expanse of textured desaturated olive-grey wall, dark enough for overlaid light Chinese text, free of objects and heavy cracks. Shot close with cinematic editorial composition, soft film grain like 35 mm Portra, tactile natural environment, warm ochre light against blue petals and forest-green shadow. Restrained, evocative, photographic, with optical depth. No lettering, no typography, no frame, no logo, no extra flowers, no people. Widescreen landscape composition.

</details>

## 2026-11-26 墙角小花开场 Demo

- **需求**。借用旧版「墙角开了一朵小花」的设计思想，为首页做一个更有风格的开场预览。
- **实现**。用原文和墙缝里的蓝花组成开场画面。点花后花瓣飘起，页面淡出进入现有首页。右上角可直接浏览。系统开启减少动态效果时可直接进入。
- **范围**。Demo 位于独立分支 `demo/flower-opening`，路由为 `/demo/flower`。
- **验证**。代码检查和生产构建通过。桌面和手机上验证了开场、键盘访问、跳过、减少动态效果，以及进入现有首页。
- **线上状态**。供站主预览，待确定是否采用。

## 2026-11-26 恢复滚动网格与卡片轮播

- **需求**。恢复线上版的网格背景和卡片展示。将项目测试、公众号运营、项目开发分开。兼职现场照片自动轮播。SPIKE 经历更正为「SPIKE 课程老师」。
- **实现**。恢复滚动网格组件。首页三张作品卡片分别跳到项目页对应小节。首页近期活动和兼职页共用轮播，支持自动切换、手动换图和暂停。首页和个人经历统一使用 SPIKE 教师身份。
- **验证**。代码检查和生产构建通过。浏览器核对了网格移动、作品卡片跳转、两处轮播、暂停、手动切换、年份筛选和手机布局。
- **线上状态**。待站主确认发布。

## 2026-11-26 调整首页开场语气

- **需求**。站主更喜欢线上首页自然的介绍，希望新版开场少一些刻意的自我定义。
- **实现**。用「嗨，我是陈熙雅。」开场，从周中的项目和测试写到周末的活动、家教和店铺。浏览器标题和分享标题改用「陈熙雅 · 个人作品站」。
- **验证**。代码检查和生产构建通过。桌面和手机均核对了开场文案、浏览器标题和布局。
- **线上状态**。待站主确认发布。

## 2026-11-26 首屏突出全能与建立开发记录

- **需求**。站主希望访客先记住她的全能。每次更新和需求变更同步到 GitHub，同时维护系统说明书和需求变更文档。
- **实现**。首页改为「我是个全能派。从写代码到做生意。」下方用企业项目、功能测试、独立上线小程序、活动督导、家教和 1688 店铺来说明。同步更新关于页开头、浏览器标题、分享文案和页脚简介。
- **开发记录**。建立[系统说明书](SYSTEM.md)和本变更文档，在 README 加入入口，并把每轮同步仓库的约定写入 `AGENTS.md`。
- **验证**。生产构建通过，桌面和手机均核对了新版首屏。
- **线上状态**。首屏文案在发布前由上方记录调整。

## 2026-11-26 个人风格改版、兼职记录和多简历下载

- **需求**。保留周中实习、周末多场景实践的现状。网站要有个人风格，并展示经常更新的兼职活动、家教、自营 1688 店铺和 SPIKE 课程。允许访客按方向下载简历。
- **实现**。使用站主的旅行和徒步照片重做首页。兼职页支持年份筛选和照片翻看，首页自动展示最新活动。联系页提供项目管理版和软件测试版 PDF。
- **验证**。生产构建和代码检查通过。在桌面和手机上验证了导航、年份筛选、照片切换和两份 PDF 下载。
- **实现提交**。`6210b7a`
- **后续更正**。站主已确认担任 SPIKE 课程老师，见上方记录。
- **线上状态**。待站主确认发布。
