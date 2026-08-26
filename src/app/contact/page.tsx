import type { Metadata } from "next";
import Image from "next/image";
import { Download, Mail, MapPin, Phone, QrCode, Smartphone, UserPlus } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SaveContactButton } from "@/components/contact/save-contact";
import { contact, resumePath } from "@/content";

export const metadata: Metadata = {
  title: "联系我",
  description:
    "联系陈熙雅：电话 15005794616，邮箱 2641172506@qq.com，期望城市上海。",
};

const methods = [
  {
    icon: Phone,
    label: "电话",
    value: contact.phone,
    href: `tel:${contact.phone}`,
  },
  {
    icon: Mail,
    label: "邮箱",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MapPin,
    label: "期望城市",
    value: contact.city,
  },
];

const quickLinks = [
  {
    icon: Download,
    label: "PDF 简历",
    hint: "点击下载",
    href: resumePath,
    download: true,
  },
  {
    icon: Smartphone,
    label: "古诗词练习小程序",
    hint: "微信搜索体验",
  },
  {
    icon: MapPin,
    label: "作品集完整展示",
    hint: "前往项目页",
    href: "/projects",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="联系我"
        title="期待与你合作"
        description="如果你正在寻找一位懂技术、善协调、能扛事的应届生伙伴，欢迎随时联系。周中实习 · 周末多场景实践，随时在线。"
      />

      <Container className="pb-20">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {methods.map((m) => {
              const Icon = m.icon;
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2">
                    <Icon className="h-5 w-5 text-foreground" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
                      {m.label}
                    </span>
                    <span className="mt-1 block font-display text-base font-medium text-foreground">
                      {m.value}
                    </span>
                  </span>
                </>
              );
              return m.href ? (
                <a
                  key={m.label}
                  href={m.href}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-foreground/20"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={m.label}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5"
                >
                  {inner}
                </div>
              );
            })}

            <Reveal delay={0.1}>
              <SaveContactButton className="w-full" />
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface-2">
                        <QrCode className="h-4 w-4 text-foreground" />
                      </span>
                      <h2 className="font-display text-lg font-semibold">
                        微信联系
                      </h2>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      扫一扫，添加我的微信
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4 text-foreground/60" />
                    <span className="font-mono text-xs text-muted">
                      chen2641172506
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-card">
                    <Image
                      src="/images/wechat/personal-qr.jpg"
                      alt="微信二维码"
                      fill
                      sizes="256px"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="mt-4 text-sm text-dim">
                    微信扫一扫，添加为朋友
                  </p>
                </div>

                <div className="mt-6 border-t border-line pt-5">
                  <h3 className="font-display text-base font-semibold">
                    快速入口
                  </h3>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {quickLinks.map((e) => {
                      const Icon = e.icon;
                      const content = (
                        <span className="flex items-center gap-2.5">
                          <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface-2">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">
                              {e.label}
                            </span>
                            <span className="font-mono text-[11px] text-dim">
                              {e.hint}
                            </span>
                          </span>
                        </span>
                      );
                      return e.href ? (
                        <a
                          key={e.label}
                          href={e.href}
                          download={e.download}
                          className="flex items-center justify-between rounded-xl border border-line bg-surface/60 p-3.5 transition-colors hover:border-foreground/20 hover:bg-surface"
                        >
                          {content}
                          <span className="font-mono text-xs text-dim">→</span>
                        </a>
                      ) : (
                        <div
                          key={e.label}
                          className="flex items-center justify-between rounded-xl border border-line bg-surface/60 p-3.5"
                        >
                          {content}
                          <span className="rounded-full bg-foreground/5 px-2 py-0.5 font-mono text-[10px] text-dim">
                            已上线
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </>
  );
}
