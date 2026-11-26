"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/content";

export function Navbar() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  function links() {
    return nav.map((item) => {
      const isResume = item.href === "/contact#resumes";
      const active = item.href === pathname;
      return (
        <Link
          aria-current={active ? "page" : undefined}
          className={cn("site-nav-link", isResume && "site-nav-download")}
          href={item.href}
          key={item.href}
          onClick={() => setMenuPath(null)}
        >
          {item.label}
          {isResume && <ArrowUpRight aria-hidden size={14} />}
        </Link>
      );
    });
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="主导航">
        <Link href="/" className="site-wordmark" onClick={() => setMenuPath(null)}>
          <span className="site-mark" aria-hidden>CX</span>
          {site.name}
        </Link>
        <div className="site-nav-desktop">{links()}</div>
        <button
          type="button"
          className="site-menu-toggle"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          onClick={() => setMenuPath(open ? null : pathname)}
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
        <div id="mobile-navigation" className="site-nav-mobile" hidden={!open}>
          {links()}
        </div>
      </nav>
    </header>
  );
}
