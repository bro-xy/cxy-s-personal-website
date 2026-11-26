import Image from "next/image";
import { contentAccounts } from "@/content";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function ContentOps() {
  return (
    <Section
      eyebrow="内容运营作品集"
      title="我做过的公众号内容"
      description="从自己的诗词分享号到校园和企业公众号，每个账号里我做的事都不太一样。"
    >
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {contentAccounts.map((acc, i) => (
          <Reveal key={acc.name} delay={(i % 3) * 0.05}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-card">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-2">
                {acc.image ? (
                  <Image
                    src={acc.image}
                    alt={`${acc.name} 公众号展示`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-display text-3xl font-semibold text-dim">
                    {acc.name.charAt(0)}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {acc.name}
                </h3>
                <span className="mt-2 inline-flex w-fit rounded-full border border-line bg-surface-2 px-2.5 py-0.5 font-mono text-[11px] text-muted">
                  {acc.positioning}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {acc.responsibility}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
