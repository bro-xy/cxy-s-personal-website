# 陈熙雅个人网站系统说明书

这是陈熙雅的公开作品站。首页从她平时做的项目和兼职说起，访客可以继续查看软件开发、项目交付、内容运营、活动和店铺经营经历，也可以选择与自己关注方向对应的简历。

公开入口为 [nshmpp.cn](http://nshmpp.cn/)。源码和开发历史集中在 [GitHub 仓库](https://github.com/bro-xy/cxy-s-personal-website)。本说明对应仓库版本，线上发布进度见[需求变更文档](REQUIREMENTS-CHANGELOG.md)。

## 页面和日常维护入口

| 页面 | 访客能看到什么 | 主要维护位置 |
| --- | --- | --- |
| 首页 `/` | 首屏介绍、旅行照片、项目测试、公众号运营、项目开发、近期活动和生活图集 | `src/content/site.ts`、`src/components/home/` |
| 关于我 `/about` | 自我介绍、教育、实习、学生组织、荣誉和技能 | `src/content/about.ts` |
| 项目与作品 `/projects` | 企业项目、古诗词小程序和公众号作品 | `src/content/projects.ts` |
| 兼职与副业 `/activities` | 按年份筛选的现场记录、活动照片和其他副业 | `src/content/activities.ts`、`src/components/activities/` |
| 联系我 `/contact` | 联系渠道、微信二维码、电子名片、两种简历 | `src/app/contact/page.tsx`、`src/content/site.ts`、`public/resume/` |

首页的三张作品入口卡片分别链接到项目页的项目测试、公众号运营和项目开发区。首页和项目页共用古诗词小程序组件。首页从兼职列表读取最新一条记录，照片与兼职页共用轮播组件。可见的多图轮播约每 3.2 秒换一张，访客也可以暂停或手动切换。系统开启减少动态效果时，只提供手动切换。顶栏、首页按钮和页脚的简历入口都指向联系页的 `#resumes`。访客可以下载项目管理版或软件测试版。

## 兼职记录、作品和简历怎么更新

- **活动**。在 `src/content/activities.ts` 新增活动名称、角色、时间、简述和亲自负责的事项。用唯一的 `slug` 标识活动，把照片放在 `public/images/activities/<slug>/` 并在活动条目里引用。暂时只有文字也可以更新，`photos` 使用空数组。时间按 `YYYY` 或 `YYYY.MM` 填写。同月多场活动可以用 `sortDate` 保存 YYYY-MM-DD 格式的排序日期。
- **副业和作品**。1688 店铺、家教、SPIKE 课程老师及采购助理经历在 `otherWorks`。项目和公众号作品在 `projects.ts`。收到新的素材时，优先记录本人做了什么和可展示的结果。使用适合公开的图片、文稿和链接。
- **简历和联系**。简历 PDF 放在 `public/resume/`，在 `site.ts` 的 `resumes` 中设置下载名称、说明和路径。更换简历时核对岗位方向、实习日期和浏览器下载结果。改联系方式时同步检查联系页、页脚和电子名片。

## 开发和发布

项目使用 Next.js App Router、React、TypeScript 和 Tailwind CSS。Framer Motion 用于页面动效，照片和 PDF 由 `public/` 提供。页面内容主要从 `src/content/` 读取。全站滚动网格由 `src/components/background.tsx` 加载。配色在 `src/app/globals.css`，首页、兼职和简历区的样式在 `src/app/personal.css`。

本地用 Node.js 20.9 或更高版本。首次运行时执行 `npm ci`，用 `npm run dev` 预览。改完后运行 `npm run lint` 和 `npm run build`，再检查受影响页面在桌面和手机上的显示。修改活动时实际切换筛选和照片。修改简历时实际下载 PDF。

构建使用 Next.js standalone 输出。部署前确认生产环境的 `NEXT_PUBLIC_SITE_URL`，并随 standalone 产物提供 `public/` 和 `.next/static/`。服务器上的更新方式和命令参见[部署说明](../DEPLOY.md)。仓库提交后按站主确认的安排发布。发布后打开公开地址核对页面、图片和下载，并把结果补进[需求变更文档](REQUIREMENTS-CHANGELOG.md)。

## 开发记录

每次新需求和内容更新都追加日期与摘要。实现后补上涉及页面、验证结果和发布状态，和相应修改一起提交到 GitHub。对路由、内容结构或发布方式有影响的修改，也同步更新本说明书。
