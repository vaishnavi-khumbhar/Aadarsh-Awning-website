import { media } from "../data/media";
import { approach } from "../data/site";
import useSeo from "../hooks/useSeo";
import { Page, Reveal, Stagger, Item } from "../components/Motion";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Button from "../components/Button";

export default function Approach() {
  useSeo({
    title: "Our Approach | Understand, Recommend, Install, Support — Aadarsh Awning",
    description:
      "We understand your requirement, recommend a suitable awning or shade solution, install it with attention to finishing, and support you after.",
  });

  return (
    <Page>
      <PageHero
        crumbs={[{ label: "Our Approach" }]}
        eyebrow="How We Work"
        title="Our"
        accent="Approach"
        text="Every space is different. That is why we understand the requirement first, recommend the right solution, and complete every installation with care and attention to detail."
        image={media.hero.approach}
        imageKey="hero.approach"
        imageAlt="Awning project being planned on site"
      >
        <Button to="/contact">Discuss Your Requirement</Button>
      </PageHero>

      <section className="section bg-ivory">
        <div className="container-site">
          <Stagger className="border-t border-gold/50">
            {approach.map((a) => (
              <Item key={a.no} className="group grid gap-4 border-b border-gold/50 py-10 md:grid-cols-12 md:items-center md:gap-10 md:py-14">
                <span className="font-serif text-[72px] font-semibold leading-none text-blue-soft transition-colors duration-500 group-hover:text-gold md:col-span-2 md:text-[96px]">
                  {a.no}
                </span>
                <h2 className="text-[40px] leading-none md:col-span-4 md:text-[56px]">
                  <span className="text-gold">—</span> {a.title}
                </h2>
                <p className="lead md:col-span-6 md:text-xl">{a.text}</p>
              </Item>
            ))}
          </Stagger>
          <Reveal className="mt-14 flex flex-col gap-3 sm:flex-row sm:gap-5">
            <Button to="/contact" className="w-full sm:w-auto">Get a Quote</Button>
            <Button to="/products" variant="secondary" className="w-full sm:w-auto">Explore Products</Button>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </Page>
  );
}
