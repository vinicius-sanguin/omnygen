import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-omny-dark/90 shadow-lg backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a
          href="#inicio"
          className="logo-lift flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/logo.jpg"
            alt="OMNYGEN"
            width={56}
            height={56}
            className="size-10 shrink-0 rounded-full sm:size-12 md:size-14"
            priority
          />
          <span className="text-lg font-black tracking-tight sm:text-2xl">
            OMNY<span className="text-gradient">GEN</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Olá! Gostaria de falar com a OMNYGEN.")}
          target="_blank"
          rel="noopener noreferrer"
          className="tubular-bg shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
