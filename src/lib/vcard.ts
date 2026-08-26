import { contact, site } from "@/content";

/** 生成 vCard 文本（用于保存到通讯录） */
export function buildVCard(): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${site.name}`,
    `N:${site.name};;;`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `EMAIL:${contact.email}`,
    `ADR;TYPE=WORK:;;${contact.city};;;`,
    "END:VCARD",
  ].join("\n");
}

/** 触发 vCard 下载 */
export function downloadVCard() {
  const blob = new Blob([buildVCard()], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "chen-xiya.vcf";
  a.click();
  URL.revokeObjectURL(url);
}
