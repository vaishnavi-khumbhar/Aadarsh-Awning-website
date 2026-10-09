import { media } from "../data/media";
import { whyUs } from "../data/site";
import useSeo from "../hooks/useSeo";
import { Page, Reveal, Stagger, Item, ImageReveal } from "../components/Motion";
import PageHero from "../components/PageHero";
import ImageSlot from "../components/ImageSlot";
import Icon from "../components/Icon";
import CtaBanner from "../components/CtaBanner";
import Button from "../components/Button";

export default function WhyUs() {
  useSeo({
    title: "Why Choose Aadarsh Awning | Experience Since 2015",
    description:
      "Experienced mounting team, trusted frame materials, and a focus on both product and service — awning solutions for every project since 2015.",
  });

  return (
    <Page>
      <PageHero
        crumbs={[{ label: "Why Us" }]}
        eyebrow="Why Aadarsh Awning"
        title="Why Choose"
        accent="Aadarsh Awning?"
        text="A good awning is not only about the product. It is also about professional installation and dependable service."
        image={media.hero.whyUs}
        imageKey="hero.whyUs"
        imageAlt="Professionally installed awning with clean finishing"
      >
        <Button to="/contact">Get a Quote</Button>
      </PageHero>

      <section className="section bg-ivory">
        <div className="container-site">
          <Stagger className="divide-y divide-beige border-y border-beige">
            {whyUs.map((w, i) => (
              <Item key={w.title} className="group grid items-start gap-5 py-10 md:grid-cols-12 md:gap-10 md:py-12">
                <span className="font-serif text-5xl font-semibold text-blue-soft md:col-span-2 md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-4 md:col-span-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold/50 bg-white transition-colors duration-500 group-hover:bg-gold">
                    <Icon name={w.icon} className="h-6 w-6 text-gold transition-colors duration-500 group-hover:text-white" strokeWidth={1.25} />
                  </span>
                  <h2 className="text-[26px] leading-tight md:text-[32px]">{w.title}</h2>
                </div>
                <p className="lead md:col-span-5 md:pt-3">{w.text}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-ivory pb-12 md:pb-16 lg:pb-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ImageReveal>
            <ImageSlot src={media.sections.installation} alt="Mounting team at work" slot="sections.installation" size="1400 × 1000" className="aspect-[4/3] w-full rounded-[3px]" />
          </ImageReveal>
          <Reveal>
            <p className="eyebrow eyebrow-gold mb-5">Product + Service</p>
            <h2 className="text-[34px] leading-[1.1] sm:text-[42px]">From Small Homes to <span className="text-gold">Large-Scale Projects</span></h2>
            <p className="lead mt-6">
              From small residential requirements to commercial and large-scale projects, we provide solutions
              according to project needs.
            </p>
            <div className="mt-9"><Button to="/products" variant="secondary">Explore Products</Button></div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </Page>
  );
}