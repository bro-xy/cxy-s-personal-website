# 部署上线教程

从零开始，将本网站部署到你的自有服务器并绑定域名，实现 HTTPS 访问。

---

## 目录

1. [购买服务器](#1-购买服务器)
2. [购买域名](#2-购买域名)
3. [服务器初始化](#3-服务器初始化)
4. [安装运行环境](#4-安装运行环境)
5. [上传项目代码](#5-上传项目代码)
6. [构建与启动](#6-构建与启动)
7. [域名解析配置](#7-域名解析配置)
8. [Nginx 反向代理](#8-nginx-反向代理)
9. [HTTPS 证书 (Let's Encrypt)](#9-https-证书-lets-encrypt)
10. [进程守护 (PM2)](#10-进程守护-pm2)
11. [更新与维护](#11-更新与维护)

---

## 1. 购买服务器

### 推荐云服务商

| 服务商 | 特点 | 适合场景 |
|--------|------|----------|
| 阿里云 ECS | 国内访问快、备案方便 | 面向国内用户 |
| 腾讯云 CVM | 性价比高、新用户优惠 | 面向国内用户 |
| 华为云 ECS | 企业级稳定 | 面向国内用户 |
| Vultr / DigitalOcean | 海外、按小时计费 | 面向海外用户 |

### 配置建议

- **最低配置**：1 核 CPU / 1GB 内存 / 20GB 系统盘（个人站足够）
- **推荐配置**：2 核 CPU / 2GB 内存 / 40GB 系统盘（更流畅）
- **操作系统**：Ubuntu 22.04 LTS（本教程以此为例）

> 国内服务器（阿里云/腾讯云）需要域名备案才能正常访问，备案周期约 7-20 天。海外服务器无需备案。

---

## 2. 购买域名

### 推荐域名注册商

- 阿里云万网（国内，.com 首年约 55 元）
- 腾讯云 DNSPod
- Namecheap（海外，价格便宜）
- Cloudflare（成本价续费）

### 域名选择建议

- 个人站推荐 `.com` 或 `.me`
- 简短好记，与个人品牌相关
- 示例：`chenxiya.com`、`xiya.me`

### 注意事项

- 如果服务器在国内，域名必须完成 ICP 备案
- 备案需要：身份证照片、域名证书、服务器公网 IP
- 备案期间网站无法通过域名访问（可先用 IP 访问调试）

---

## 3. 服务器初始化

### 3.1 连接服务器

购买后获得：公网 IP、用户名（root）、密码。

```bash
# 在本地终端连接（替换为你的 IP）
ssh root@你的服务器IP
```

### 3.2 更新系统 & 安装基础工具

```bash
# 更新软件包
apt update && apt upgrade -y

# 安装常用工具
apt install -y curl wget git nano ufw
```

### 3.3 配置防火墙

```bash
# 放行 SSH (22)、HTTP (80)、HTTPS (443)
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp

# 启用防火墙
ufw enable

# 查看状态
ufw status
```

### 3.4 创建非 root 用户（推荐）

```bash
# 创建用户 deploy
adduser deploy

# 赋予 sudo 权限
usermod -aG sudo deploy

# 切换到 deploy 用户
su - deploy
```

后续操作均在 `deploy` 用户下进行。

---

## 4. 安装运行环境

### 4.1 安装 Node.js 20 LTS

```bash
# 使用 NodeSource 官方源安装
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 验证
node -v   # 应输出 v20.x.x
npm -v    # 应输出 10.x.x
```

### 4.2 安装 PM2（进程守护）

```bash
sudo npm install -g pm2
```

### 4.3 安装 Nginx

```bash
sudo apt install -y nginx

# 启动并设为开机自启
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

## 5. 上传项目代码

### 方式一：Git 克隆（推荐）

如果项目已推送到 GitHub / Gitee：

```bash
cd /home/deploy
git clone https://github.com/你的用户名/仓库名.git website
cd website
```

### 方式二：SCP 上传

在**本地终端**执行（不是服务器上）：

```bash
# Windows PowerShell
scp -r "C:\Users\你的用户名\Desktop\项目文件夹\*" deploy@你的服务器IP:/home/deploy/website
```

### 方式三：FTP / SFTP 工具

使用 WinSCP、FileZilla 等工具，通过 SFTP 协议连接服务器，拖拽上传。

---

## 6. 构建与启动

### 6.1 安装依赖

```bash
cd /home/deploy/website
npm install
```

### 6.2 配置环境变量

```bash
# 创建生产环境变量文件
nano .env.production
```

写入以下内容（替换为你的域名）：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 6.3 构建项目

```bash
# 运行构建
npm run build
```

构建成功后会在 `.next/standalone/` 目录生成自包含的可执行产物。

### 6.4 首次启动测试

```bash
# 指定生产环境变量并启动
NODE_ENV=production NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  node .next/standalone/server.js

# 应看到：> Next.js 16.x on http://localhost:3000
```

此时在浏览器访问 `http://你的服务器IP:3000` 应能正常打开网站。

按 `Ctrl + C` 停止，下面用 PM2 守护进程。

---

## 7. 域名解析配置

### 7.1 添加 A 记录

登录域名注册商的 DNS 管理后台，添加解析记录：

| 记录类型 | 主机记录 | 记录值 | TTL |
|----------|----------|--------|-----|
| A | @ | 你的服务器公网 IP | 600 |
| A | www | 你的服务器公网 IP | 600 |

- `@` 表示根域名（如 `your-domain.com`）
- `www` 表示带 www 前缀（如 `www.your-domain.com`）

### 7.2 验证解析生效

```bash
# 在本地终端执行
ping your-domain.com

# 或使用 dig
dig your-domain.com
```

当返回的 IP 地址是你的服务器 IP 时，说明解析已生效（通常几分钟到几小时）。

---

## 8. Nginx 反向代理

### 8.1 创建站点配置

```bash
sudo nano /etc/nginx/sites-available/your-domain.com
```

写入以下内容（替换 `your-domain.com`）：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # 安全：屏蔽隐藏文件
    location ~ /\. {
        deny all;
    }

    # 反向代理到 Next.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # 静态资源缓存
    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    # 图片缓存
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp|avif)$ {
        proxy_pass http://127.0.0.1:3000;
        expires 30d;
        add_header Cache-Control "public";
    }

    # 上传体积
    client_max_body_size 10M;
}
```

### 8.2 启用站点

```bash
# 创建软链接启用站点
sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/

# 测试配置语法
sudo nginx -t

# 重载 Nginx
sudo systemctl reload nginx
```

此时访问 `http://your-domain.com` 应能通过 Nginx 代理访问到网站。

---

## 9. HTTPS 证书 (Let's Encrypt)

### 9.1 安装 Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 9.2 申请免费 SSL 证书

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

按提示操作：

1. 输入邮箱（接收证书过期提醒）
2. 同意服务条款 `Y`
3. 选择是否接收邮件 `N`
4. Certbot 会自动修改 Nginx 配置并启用 HTTPS

### 9.3 验证 HTTPS

访问 `https://your-domain.com`，浏览器应显示锁标志，表示证书生效。

### 9.4 自动续期

Let's Encrypt 证书有效期 90 天，Certbot 会自动设置续期定时任务：

```bash
# 测试续期是否正常
sudo certbot renew --dry-run
```

---

## 10. 进程守护 (PM2)

### 10.1 用 PM2 启动 Next.js

```bash
cd /home/deploy/website

# 启动并命名进程
NODE_ENV=production NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  pm2 start .next/standalone/server.js --name "chenxiya-site"

# 保存进程列表（开机自启）
pm2 save

# 设置 PM2 开机自启
pm2 startup
# 按提示执行输出的那条命令
```

### 10.2 常用 PM2 命令

```bash
pm2 status              # 查看进程状态
pm2 logs chenxiya-site  # 查看日志
pm2 restart chenxiya-site  # 重启
pm2 stop chenxiya-site     # 停止
pm2 monit               # 实时监控面板
```

---

## 11. 更新与维护

### 11.1 更新网站内容

当你在本地修改了内容或代码后：

```bash
# 方式一：Git 拉取
cd /home/deploy/website
git pull origin main

# 方式二：重新上传文件后继续

# 重新安装依赖（如 package.json 有变化）
npm install

# 重新构建
npm run build

# 重启 PM2 进程
pm2 restart chenxiya-site
```

### 11.2 修改环境变量后

```bash
# 先删除旧进程
pm2 delete chenxiya-site

# 用新的环境变量重新启动
cd /home/deploy/website
NODE_ENV=production NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  pm2 start .next/standalone/server.js --name "chenxiya-site"

pm2 save
```

### 11.3 查看 Nginx 日志

```bash
# 访问日志
sudo tail -f /var/log/nginx/access.log

# 错误日志
sudo tail -f /var/log/nginx/error.log
```

### 11.4 服务器资源检查

```bash
# 查看内存使用
free -h

# 查看磁盘使用
df -h

# 查看 CPU 负载
top
```

---

## 完整流程快速回顾

```
1. 购买服务器 + 域名
2. DNS 解析 → 域名指向服务器 IP
3. 服务器安装 Node.js + Nginx + PM2
4. 上传代码 → npm install → npm run build
5. PM2 启动 server.js (端口 3000)
6. Nginx 反向代理 80 → 3000
7. Certbot 申请 HTTPS 证书
8. 访问 https://your-domain.com
```

## 常见问题

### Q: 构建报内存不足？

服务器 1GB 内存时，构建可能 OOM。解决方案：

```bash
# 临时增加 2GB 交换分区
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

### Q: 域名解析不生效？

- 检查 DNS 记录是否正确指向服务器 IP
- 等待 DNS 缓存过期（TTL 时间）
- 本地执行 `nslookup your-domain.com` 验证

### Q: 国内服务器需要备案？

是的，使用阿里云/腾讯云等国内服务器，域名必须完成 ICP 备案后才能通过域名正常访问。备案在云服务商后台提交，需要 7-20 个工作日。备案期间可使用服务器 IP 访问。

### Q: 如何修改网站内容？

所有文案在 `src/content/` 目录下修改，重新 `npm run build` 并 `pm2 restart` 即可更新。
