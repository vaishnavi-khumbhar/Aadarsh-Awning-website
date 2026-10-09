import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { media } from "../data/media";
import { site, projectTypes } from "../data/site";
import { products } from "../data/products";
import useSeo from "../hooks/useSeo";
import { Page, Reveal } from "../components/Motion";
import PageHero from "../components/PageHero";
import Button from "../components/Button";

const initial = { name: "", phone: "", email: "", projectType: "", requirement: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!/^[+\d][\d\s-]{7,}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Please enter a valid email address.";
  if (!v.projectType) e.projectType = "Please choose a project type.";
  if (!v.requirement) e.requirement = "Please choose a requirement.";
  return e;
}

export default function Contact() {
  useSeo({
    title: "Contact & Request a Quote | Aadarsh Awning, Andheri East, Mumbai",
    description:
      "Share your awning, parking shed, tensile structure or customized shade requirement with Aadarsh Awning and request a quote.",
  });

  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const c = site.contact;
  const waDigits = c.whatsapp.replace(/\D/g, "");

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate(values);
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(Object.keys(er)[0])?.focus();
      return;
    }
    // Hand-off: once a real WhatsApp number is set in site.js, the enquiry
    // opens in WhatsApp pre-filled. Connect a form backend / CRM here.
    if (waDigits.length >= 10) {
      const text = `New quote request%0AName: ${values.name}%0APhone: ${values.phone}%0AEmail: ${values.email}%0AProject: ${values.projectType}%0ARequirement: ${values.requirement}%0AMessage: ${values.message}`;
      window.open(`https://wa.me/${waDigits}?text=${text}`, "_blank", "noopener");
    }
    setSent(true);
    setValues(initial);
  };

  const details = [
    { label: "Phone", value: c.phone, Icon: Phone },
    { label: "WhatsApp", value: c.whatsapp, Icon: MessageCircle },
    { label: "Email", value: c.email, Icon: Mail },
    { label: "Address", value: c.address, Icon: MapPin },
  ];

  return (
    <Page>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Request a Quote"
        title="Let's Discuss Your"
        accent="Awning Requirement"
        text="Need an awning, parking shed, tensile structure, or customized outdoor shade solution?"
        image={media.hero.contact}
        imageKey="hero.contact"
        imageAlt="Awning shading a welcoming entrance"
      />

      <section className="section bg-ivory">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="lead space-y-5">
              <p>Get in touch with Aadarsh Awning and share your project requirement with our team.</p>
              <p>
                Whether it is a residential, commercial, or larger project, we will help you identify a suitable
                solution based on your space and application.
              </p>
            </Reveal>
            <Reveal delay={0.1} as="ul" className="mt-10 border-t border-gold/40">
              {details.map(({ label, value, Icon }) => (
                <li key={label} className="flex items-start gap-5 border-b border-gold/40 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 bg-white">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-grey">{label}</p>
                    <p className="mt-1 font-serif text-lg text-navy">{value}</p>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="card relative p-6 sm:p-10">
              <span className="absolute left-0 top-0 h-[3px] w-24 bg-gold" aria-hidden="true" />
              <h2 className="text-[30px] leading-tight sm:text-[36px]">Request a Quote</h2>
              <p className="mt-2 text-[15px] text-grey">Fields marked * are required.</p>

              {sent ? (
                <div className="mt-10 flex flex-col items-start gap-4 border border-beige bg-cream p-8" role="status">
                  <CheckCircle2 className="h-9 w-9 text-gold" strokeWidth={1.3} />
                  <h3 className="text-2xl">Thank you — we have your requirement.</h3>
                  <p className="text-[15px] text-grey">Our team will get in touch with you shortly.</p>
                  <button type="button" onClick={() => setSent(false)} className="btn btn-secondary mt-2">
                    <span>Send another enquiry</span>
                  </button>
                </div>
              ) : (
                <form className="mt-8 grid gap-6 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
                  <Field id="name" label="Name *" error={errors.name}>
                    <input id="name" name="name" autoComplete="name" className="field" value={values.name} onChange={onChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                  </Field>
                  <Field id="phone" label="Phone *" error={errors.phone}>
                    <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" value={values.phone} onChange={onChange} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} />
                  </Field>
                  <Field id="email" label="Email" error={errors.email}>
                    <input id="email" name="email" type="email" autoComplete="email" className="field" value={values.email} onChange={onChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                  </Field>
                  <Field id="projectType" label="Project Type *" error={errors.projectType}>
                    <select id="projectType" name="projectType" className="field" value={values.projectType} onChange={onChange} aria-invalid={!!errors.projectType} aria-describedby={errors.projectType ? "projectType-err" : undefined}>
                      <option value="">Select project type</option>
                      {projectTypes.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </Field>
                  <Field id="requirement" label="Requirement *" error={errors.requirement} full>
                    <select id="requirement" name="requirement" className="field" value={values.requirement} onChange={onChange} aria-invalid={!!errors.requirement} aria-describedby={errors.requirement ? "requirement-err" : undefined}>
                      <option value="">Select a product or solution</option>
                      {products.map((p) => <option key={p.slug}>{p.name}</option>)}
                      <option>Customized Solution / Not Sure</option>
                    </select>
                  </Field>
                  <Field id="message" label="Message" full>
                    <textarea id="message" name="message" rows={5} className="field resize-y" placeholder="Tell us about your space, approximate size and location." value={values.message} onChange={onChange} />
                  </Field>
                  <div className="sm:col-span-2">
                    <Button type="submit" className="w-full sm:w-auto">Request a Quote</Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}

function Field({ id, label, error, full, children }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="field-label">{label}</label>
      {children}
      {error && <p id={`${id}-err`} className="mt-2 text-[13px] text-[#b4472f]">{error}</p>}
    </div>
  );
}
