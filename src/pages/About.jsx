import { media } from "../data/media";
import useSeo from "../hooks/useSeo";
import { Page, Reveal, ImageReveal, Stagger, Item } from "../components/Motion";
import PageHero from "../components/PageHero";
import ImageSlot from "../components/ImageSlot";
import Button from "../components/Button";
import Applications from "../components/Applications";
import CtaBanner from "../components/CtaBanner";
import { approach } from "../data/site";

export default function About() {
  useSeo({
    title: "About Us | Aadarsh Awning — Better Shade. Better Spaces.",
    description:
      "Since 2015, Aadarsh Awning has been transforming everyday spaces with thoughtfully designed awning and shade solutions for homes, businesses and large projects.",
  });

  return (
    <Page>
      <PageHero
        crumbs={[{ label: "About" }]}
        eyebrow="Our Brand Story"
        title="Creating Better Spaces"
        accent="Through Better Shade"
        text="Since 2015, Aadarsh Awning has been transforming everyday spaces with thoughtfully designed awning and shade solutions."
        image={media.hero.about}
        imageKey="hero.about"
        imageAlt="Aadarsh Awning installation on a modern building"
      >
        <Button to="/contact">Get a Quote</Button>
      </PageHero>

      <section className="section bg-ivory">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow eyebrow-gold mb-5">Since 2015</p>
              <h2 className="text-[34px] leading-[1.1] sm:text-[42px]">More Than Protection From the Sun and Rain</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lead space-y-5 lg:col-span-7 lg:pt-2">
            <p>
              For us, shade is more than protection from the sun and rain. It is about creating spaces that feel
              more comfortable, look better, and work smarter.
            </p>
            <p>
              With an experienced mounting team, trusted frame materials, and a strong focus on both product
              quality and service, we deliver solutions for homes, businesses, parking areas, storefronts, and
              large commercial projects.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-12 md:pb-16 lg:pb-20">
        <div className="container-site grid gap-6 md:grid-cols-12">
          <ImageReveal className="md:col-span-7">
            <ImageSlot src={media.sections.installation} alt="Mounting team installing an awning frame" slot="sections.installation" size="1400 × 1000" className="aspect-[4/3] w-full rounded-[3px]" />
          </ImageReveal>
          <ImageReveal className="md:col-span-5 md:mt-24" delay={0.15}>
            <ImageSlot src={media.sections.aboutDetail} alt="Close detail of awning fabric and frame finishing" slot="sections.aboutDetail" size="1000 × 1200" className="aspect-[4/5] w-full rounded-[3px]" />
          </ImageReveal>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">Every Space Is Different</p>
            <h2 className="text-[34px] leading-[1.1] sm:text-[42px]">
              Understand First. <span className="text-gold">Then Recommend.</span>
            </h2>
            <p className="lead mt-6">
              Every space is different. That is why we understand the requirement first, recommend the right
              solution, and complete every installation with care and attention to detail.
            </p>
            <div className="mt-9"><Button to="/approach" variant="secondary">Our Approach</Button></div>
          </Reveal>
          <Stagger className="border-t border-gold/40">
            {approach.map((a) => (
              <Item key={a.no} className="flex items-baseline gap-6 border-b border-gold/40 py-6">
                <span className="font-serif text-3xl text-blue-soft">{a.no}</span>
                <div>
                  <h3 className="text-xl">{a.title}</h3>
                  <p className="mt-1 text-[15px] text-grey">{a.text}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <Applications />
      <CtaBanner />
    </Page>
  );
}