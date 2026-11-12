import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <>
      <footer className="border-t border-white/5 bg-omny-darker px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
          <div className="logo-lift flex items-center gap-4">
            <Image
              src="/logo.jpg"
              alt="OMNYGEN Logo"
              width={40}
              height={40}
              className="size-10 rounded-full"
            />
            <span className="text-xl font-black tracking-tight text-white">
              OMNY<span className="text-gradient">GEN</span>
            </span>
          </div>
          <p className="font-semibold text-white/50">
            {"© "}
            {new Date().getFullYear()} OMNYGEN. Excelência em Código. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>

      <a
        href={whatsappLink(
          "Olá! Vim pelo site da OMNYGEN e quero falar sobre meu projeto.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="tubular-bg floating fixed bottom-6 right-6 z-50 flex size-16 items-center justify-center rounded-full"
      >
        <MessageCircle className="size-8" aria-hidden="true" />
      </a>
    </>
  );
}
