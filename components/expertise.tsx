import { Globe, PenTool, Smartphone, type LucideIcon } from "lucide-react";

type Service = { icon: LucideIcon; title: string; description: string };

const services: Service[] = [
  {
    icon: Globe,
    title: "Desenvolvimento de Sites",
    description:
      "Criamos Landing Pages focadas em conversão, e-commerces ultra rápidos e sistemas web complexos. Estrutura otimizada com SEO rigoroso.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Desenvolvimento de Apps iOS e Android com performance nativa e arquitetura robusta. Cuidamos desde o código até a publicação nas lojas.",
  },
  {
    icon: PenTool,
    title: "UX / UI Design",
    description:
      "Interfaces modernas e intuitivas. Desenhamos a experiência do usuário para garantir que seu site ou aplicativo seja visualmente impactante e fácil de usar.",
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 bg-omny-darker/60 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Nossa <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Soluções modulares, escaláveis e sob medida para o seu negócio.
          </p>
        </div>

        <ul className="grid gap-8 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <li key={title} className="tubular-card">
              <div className="tubular-card-inner flex flex-col gap-5 p-8">
                <div className="tubular-bg flex size-14 items-center justify-center rounded-2xl">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="leading-relaxed text-white/65">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
