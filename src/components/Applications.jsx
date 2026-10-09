import { applications } from "../data/site";
import ImageSlot from "./ImageSlot";
import SectionHeading from "./SectionHeading";
import { Stagger, Item } from "./Motion";

export default function Applications() {
  return (
    <section className="section bg-ivory">
      <div className="container-site">
        <SectionHeading
          eyebrow="Applications"
          title="Solutions for Every Space"
          text="Awning and shade solutions planned around how each space is used."
        />
        <Stagger className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4" s={0.08}>
          {applications.map((a, i) => (
            <Item
              key={a.label}
              className={`group relative overflow-hidden rounded-[3px] ${i === 0 ? "col-span-2 row-span-2" : ""} ${i >= 5 ? "md:col-span-2" : ""}`}
            >
              <ImageSlot
                src={a.image}
                alt={`${a.label} awning application`}
                slot={a.imageKey}
                size={i === 0 ? "1400 × 1400" : "900 × 1100"}
                className={`w-full transition-transform duration-[1200ms] group-hover:scale-[1.05] ${i === 0 ? "aspect-square md:aspect-auto md:h-full" : i >= 5 ? "aspect-[4/5] md:aspect-[2/1]" : "aspect-[4/5]"}`}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent p-4 pt-14 sm:p-5 sm:pt-16">
                <span className="mb-2 block h-px w-8 bg-gold-champagne transition-all duration-500 group-hover:w-14" />
                <h3 className={`font-serif !text-white ${i === 0 ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>{a.label}</h3>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
