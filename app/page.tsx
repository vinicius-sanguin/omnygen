import { ContactCta } from "@/components/contact-cta";
import { Expertise } from "@/components/expertise";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 -top-24 size-[500px] rounded-full bg-omny-blue opacity-15 blur-[120px]" />
        <div className="absolute -right-48 top-[60%] size-[600px] rounded-full bg-omny-green opacity-15 blur-[120px]" />
      </div>
      <SiteHeader />
      <main className="relative">
        <Hero />
        <Expertise />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
