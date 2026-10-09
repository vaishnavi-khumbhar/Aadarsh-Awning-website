import { Navigate, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import { getProduct, getRelated } from "../data/products";
import useSeo from "../hooks/useSeo";
import { Page, Reveal, Stagger, Item } from "../components/Motion";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProductGrid from "../components/ProductGrid";
import CtaBanner from "../components/CtaBanner";
import Button from "../components/Button";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  useSeo({
    title: product ? `${product.name} in Mumbai | Aadarsh Awning` : "Not Found | Aadarsh Awning",
    description: product ? `${product.description[0]} Ideal for ${product.idealFor.toLowerCase()}` : "",
  });

  if (!product) return <Navigate to="/404" replace />;

  return (
    <Page>
      <PageHero
        crumbs={[{ label: "Products", to: "/products" }, { label: product.name }]}
        eyebrow={product.category}
        title={product.name}
        text={product.shortDescription}
        image={product.image}
        imageKey={product.imageKey}
        imageAlt={product.name}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
          <Button to="/contact" className="w-full sm:w-auto">Get a Quote</Button>
          <Button href="#overview" variant="secondary" className="w-full sm:w-auto">Learn More</Button>
        </div>
      </PageHero>

      {/* Overview + Ideal for */}
      <section id="overview" className="section scroll-mt-24 bg-ivory">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-5">Overview</p>
              <h2 className="text-[34px] leading-[1.1] sm:text-[42px]">About {product.name}</h2>
            </Reveal>
            <Reveal delay={0.1} className="lead mt-7 space-y-5">
              {product.description.map((d) => <p key={d}>{d}</p>)}
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="card relative p-8 md:p-10">
              <span className="absolute left-0 top-0 h-full w-[3px] bg-gold" aria-hidden="true" />
              <p className="eyebrow eyebrow-gold eyebrow-plain">Ideal For</p>
              <p className="mt-5 font-serif text-2xl leading-snug text-navy">{product.idealFor}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key benefits */}
      <section className="section bg-ivory !pt-0">
        <div className="container-site">
          <SectionHeading eyebrow="Key Benefits" title={`Why Choose ${product.name}`} />
          <Stagger className="mt-14 grid gap-px overflow-hidden border border-beige bg-beige md:grid-cols-3">
            {product.features.map((f, i) => (
              <Item key={f.title} className="group bg-white p-8 md:p-10">
                <span className="font-serif text-4xl text-blue-soft">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-2xl">{f.title}</h3>
                <span className="mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                <p className="mt-4 text-[15px] leading-relaxed text-grey">{f.text}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Applications */}
      <section className="section bg-cream">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Applications"
              title="Where It Works Best"
              text={`${product.name} are well suited to the following spaces.`}
            />
          </div>
          <Stagger as="ul" className="grid gap-x-10 border-t border-gold/40 sm:grid-cols-2 lg:col-span-7" s={0.06}>
            {product.applications.map((a) => (
              <Item as="li" key={a} className="flex items-center gap-4 border-b border-gold/40 py-5">
                <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2} aria-hidden="true" />
                <span className="font-serif text-xl text-navy">{a}</span>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-ivory">
        <div className="container-site">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Related Products" title="Explore More Solutions" />
            <Reveal className="shrink-0"><Button to="/products" variant="secondary">All Products</Button></Reveal>
          </div>
          <div className="mt-14"><ProductGrid items={getRelated(product.slug)} /></div>
        </div>
      </section>

      <CtaBanner
        title={`Planning ${product.name} for Your Space?`}
        text="Share your requirement and our team will help you choose the right solution for your project."
      />
    </Page>
  );
}