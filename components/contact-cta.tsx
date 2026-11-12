import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function ContactCta() {
  return (
    <section id="contato" className="scroll-mt-24 px-6 py-24">
      <div className="tubular-card mx-auto max-w-4xl">
        <div className="tubular-card-inner flex flex-col items-center px-6 py-16 text-center md:px-16">
          <h2 className="text-balance text-4xl font-black tracking-tight md:text-5xl">
            Pronto para <span className="text-gradient">elevar</span> seu
            negócio?
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg text-white/65">
            Entre em contato direto pelo WhatsApp. Estamos prontos para desenhar
            a arquitetura perfeita para o seu site ou aplicativo.
          </p>
          <a
            href={whatsappLink("Olá! Quero iniciar um projeto com a OMNYGEN.")}
            target="_blank"
            rel="noopener noreferrer"
            className="tubular-bg mt-10 inline-flex items-center gap-3 rounded-full px-10 py-4 text-lg font-bold"
          >
            <MessageCircle className="size-6" aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
