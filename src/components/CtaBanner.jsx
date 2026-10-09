import { media } from "../data/media";
import ImageSlot from "./ImageSlot";
import Button from "./Button";
import { Reveal } from "./Motion";

export default function CtaBanner({
  title = "Need the Right Awning for Your Space?",
  text = "Tell us your requirement and let our team help you choose the right awning or shade solution for your project.",
  cta = "Discuss Your Requirement",
}) {
  const hasImage = Boolean(media.sections.customizedSolutions);
  return (
    <section className="relative isolate overflow-hidden">
      <ImageSlot
        src={media.sections.customizedSolutions}
        alt="Customized awning installation"
        slot="sections.customizedSolutions"
        size="1920 × 900"
        labelPosition="bottom-right"
        fit="cover"
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div
        className={`absolute inset-0 -z-10 ${hasImage ? "bg-gradient-to-r from-[#14243a]/75 via-[#14243a]/45 to-transparent" : "bg-gradient-to-r from-cream/95 via-cream/70 to-transparent"}`}
        aria-hidden="true"
      />
      <div className="container-site py-16 md:py-20 lg:py-24">
        <Reveal className="max-w-xl">
          <p className={`eyebrow ${hasImage ? "!text-gold-champagne" : "eyebrow-gold"} mb-5`}>Customized Solutions</p>
          <h2 className={`text-[34px] leading-[1.1] sm:text-[44px] md:text-[52px] ${hasImage ? "!text-white" : ""}`}>{title}</h2>
          <p className={`lead mt-5 ${hasImage ? "!text-white/85" : ""}`}>{text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" className="w-full sm:w-auto">{cta}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}