import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-svh scroll-mt-24 flex-col justify-center px-5 pb-20 pt-32 sm:px-6 md:pt-36"
    >
      <div className="mx-auto flex w-full min-w-0 max-w-4xl flex-col items-center text-center">
        <span className="mb-6 max-w-full rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">
          Engenharia de software premium
        </span>
        <h1 className="w-full text-balance break-words text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
          Desenvolvimento de <span className="text-gradient">Sites</span> e{" "}
          <span className="text-gradient">Aplicativos</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
          A OMNYGEN une engenharia de software premium, design de alta conversão
          e performance inigualável para transformar sua visão em tecnologia de
          impacto real.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappLink(
              "Olá! Gostaria de falar sobre um projeto com a OMNYGEN.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="tubular-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold"
          >
            Iniciar Projeto
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
          <a
            href="#expertise"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white/90 transition-colors hover:bg-white/5"
          >
            Nossa Expertise
          </a>
        </div>
      </div>
    </section>
  );
}
