import Link from "next/link";
import { contact, nav, resumePath, site } from "@/content";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative border-t border-line/70">
      <Container className="py-8">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface font-mono text-sm text-foreground">
                陈
              </span>
              <span className="font-display font-semibold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.slogan}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-dim">
              联系
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-foreground">
                  电话 · {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-foreground"
                >
                  邮箱 · {contact.email}
                </a>
              </li>
              <li>期望城市 · {contact.city}</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-dim">
              导航
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {nav
                .filter((n) => !n.href.endsWith(".pdf"))
                .map((n) => (
                  <li key={n.label}>
                    <Link href={n.href} className="hover:text-foreground">
                      {n.label}
                    </Link>
                  </li>
                ))}
              <li className="pt-2">
                <Button href={resumePath} download variant="secondary" size="sm">
                  下载 PDF 简历
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-line/60 pt-4 text-xs text-dim sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name} · 用作品说话</p>
          <p className="font-mono">Shanghai · Software Engineering</p>
        </div>
      </Container>
    </footer>
  );
}
