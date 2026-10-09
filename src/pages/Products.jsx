import { media } from "../data/media";
import useSeo from "../hooks/useSeo";
import { Page } from "../components/Motion";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProductGrid from "../components/ProductGrid";
import Applications from "../components/Applications";
import CtaBanner from "../components/CtaBanner";
import Button from "../components/Button";

export default function Products() {
  useSeo({
    title: "Products & Services | Awnings, Parking & Tensile Sheds — Aadarsh Awning",
    description:
      "Retractable arm, basket window, dome type, window and fixed awnings, car parking sheds and tensile sheds for residential, commercial and customized applications.",
  });

  return (
    <Page>
      <PageHero
        crumbs={[{ label: "Products" }]}
        eyebrow="Products & Services"
        title="Shade Solutions"
        accent="for Every Space"
        text="At Aadarsh Awning, we provide a wide range of awnings and outdoor shade solutions for residential, commercial, and customized applications."
        image={media.hero.products}
        imageKey="hero.products"
        imageAlt="Range of awnings and shade structures"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
          <Button href="#all-products" className="w-full sm:w-auto">View Products</Button>
          <Button to="/contact" variant="secondary" className="w-full sm:w-auto">Get a Quote</Button>
        </div>
      </PageHero>

      <section id="all-products" className="section scroll-mt-24 bg-ivory">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Range"
            title="Awning & Shade Solutions"
            text="Practical solutions designed for residential, commercial and customized applications."
          />
          <div className="mt-14"><ProductGrid /></div>
        </div>
      </section>

      <Applications />
      <CtaBanner />
    </Page>
  );
}
