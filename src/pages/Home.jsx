import { media } from "../data/media";
import { products } from "../data/products";
import { approach, whyUs } from "../data/site";
import useSeo from "../hooks/useSeo";
import { Page, Reveal, ImageReveal, Stagger, Item } from "../components/Motion";
import HeroSlider from "../components/HeroSlider";
import ImageSlot from "../components/ImageSlot";
import SectionHeading from "../components/SectionHeading";
import ProductGrid from "../components/ProductGrid";
import Applications from "../components/Applications";
import CtaBanner from "../components/CtaBanner";
import Button from "../components/Button";
import Icon from "../components/Icon";

export default function Home() {
  useSeo({
    title: "Aadarsh Awning | Premium Awning & Outdoor Shade Solutions",
    description:
      "Professional awning installation and outdoor shade solutions for residential, commercial, industrial and customized projects. Aadarsh Awning — Better Shade. Better Spaces. Since 2015.",
  });

  return (
    <Page>
      <HeroSlider />

      {/* Section 2 — brand intro */}
      <section id="intro" className="section bg-cream">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-7">
            <ImageReveal>
              <ImageSlot
                src={media.sections.brandStory}
                alt="Elegant awning shading a modern outdoor living space"
                slot="sections.brandStory"
                size="1400 × 1000"
                className="aspect-[4/3] w-full rounded-[3px] lg:aspect-[7/5]"
              />
            </ImageReveal>
            {/* "Since 2015" badge — outside the reveal so it is never cut off */}
            <Reveal delay={0.5} className="absolute -bottom-6 right-4 z-10 hidden md:block lg:-right-6">
              <div className="border-l-[3px] border-gold bg-white px-7 py-5 shadow-card">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">Since</p>
                <p className="mt-1 font-serif text-[44px] font-bold leading-none text-navy">2015</p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow eyebrow-gold mb-5">Since 2015</p>
              <h2 className="text-[34px] leading-[1.1] sm:text-[42px] md:text-5xl">
                Shade Designed <span className="text-gold">Around Your Space</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lead mt-7 space-y-5">
              <p>
                Since 2015, Aadarsh Awning has been transforming everyday spaces with thoughtfully designed
                awning and shade solutions.
              </p>
              <p>
                For us, shade is more than protection from the sun and rain. It is about creating spaces that
                feel more comfortable, look better, and work smarter.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10">
              <Button to="/about" variant="secondary">Our Story</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-ivory">
        <div className="container-site">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our Products"
              title="Awning & Shade Solutions"
              text="Practical solutions designed for residential, commercial and customized applications."
            />
            <Reveal className="shrink-0">
              <Button to="/products" variant="secondary">View All Products</Button>
            </Reveal>
          </div>
          <div className="mt-14">
            <ProductGrid items={products} />
          </div>
        </div>
      </section>

      {/* Why us — compact */}
      <section className="section bg-cream">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Why Aadarsh Awning"
              title="Product and Service, Done Properly"
              text="A good awning is not only about the product. It is also about professional installation and dependable service."
            />
            <Reveal className="mt-9">
              <Button to="/why-us" variant="secondary">Why Choose Us</Button>
            </Reveal>
          </div>
          <Stagger className="grid gap-px overflow-hidden border border-beige bg-beige sm:grid-cols-2 lg:col-span-8">
            {whyUs.slice(0, 4).map((w) => (
              <Item key={w.title} className="group bg-white p-7 transition-colors duration-500 hover:bg-ivory md:p-9">
                <Icon name={w.icon} className="h-8 w-8 text-gold" strokeWidth={1.25} />
                <h3 className="mt-6 text-[22px]">{w.title}</h3>
                <span className="mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                <p className="mt-4 text-[15px] leading-relaxed text-grey">{w.text}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <Applications />

      {/* Approach strip */}
      <section className="section bg-cream">
        <div className="container-site">
          <SectionHeading eyebrow="How We Work" title="Our Approach" align="center" />
          <Stagger className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {approach.map((a, i) => (
              <Item key={a.no} className={`relative lg:px-8 ${i > 0 ? "lg:border-l lg:border-gold/40" : ""}`}>
                <p className="font-serif text-6xl font-semibold text-blue-soft/90">{a.no}</p>
                <h3 className="mt-4 text-2xl">{a.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-grey">{a.text}</p>
              </Item>
            ))}
          </Stagger>
          <Reveal className="mt-14 text-center">
            <Button to="/approach" variant="secondary">See Our Approach</Button>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </Page>
  );
}