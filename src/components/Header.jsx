import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { media } from "../data/media";
import { navLinks, site } from "../data/site";
import { Instagram, Facebook, Linkedin, Youtube, Whatsapp } from "./SocialIcons";
import { products } from "../data/products";
import useScrolled from "../hooks/useScrolled";
import { ease } from "./Motion";

function Logo({ scrolled }) {
  // Framed "signboard" plaque: hangs below the slim bar on desktop, tucks in on scroll
  return (
    <Link
      to="/"
      aria-label="Aadarsh Awning — Home"
      className={`group relative z-10 block shrink-0 transition-all duration-500 ${
        scrolled ? "self-center" : "self-center lg:mt-3 lg:self-start"
      }`}
    >
      <span className="relative block rounded-[3px] bg-white p-1 shadow-[0_10px_28px_-12px_rgba(20,57,110,0.35)] ring-1 ring-beige transition-shadow duration-500 group-hover:shadow-[0_14px_32px_-12px_rgba(200,150,62,0.45)] lg:p-1.5">
        <img
          src={media.branding.logo}
          alt="Aadarsh Awning — Mumbai, Andheri East"
          className={`block w-auto rounded-[2px] object-contain transition-all duration-500 ${
            scrolled ? "h-10 lg:h-[46px]" : "h-10 lg:h-[76px]"
          }`}
          width="800"
          height="343"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-[3px] rounded-b-[3px] bg-gradient-to-r from-gold-champagne via-gold to-gold-champagne"
        />
      </span>
    </Link>
  );
}

function ProductsMenu({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.25, ease }}
          className="absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 pt-4"
        >
          <div className="border border-beige border-t-gold bg-cream py-3 shadow-card" style={{ borderTopWidth: 2 }}>
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group flex items-center justify-between px-5 py-2.5 font-serif text-[15px] text-navy transition-colors hover:bg-ivory hover:text-gold"
              >
                {p.name}
                <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
            <div className="mx-5 mt-2 border-t border-beige pt-3">
              <Link to="/products" className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-blue hover:text-gold">
                View all products
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Blue top bar with contact details — reads from site.js, collapses on scroll */
function TopBar({ hidden }) {
  const c = site.contact;
  const digits = (v) => v.replace(/[^\d+]/g, "");
  const tel = digits(c.phone);
  const wa = c.whatsapp.replace(/\D/g, "");
  const socials = [
    { key: "instagram", label: "Instagram", Icon: Instagram },
    { key: "facebook", label: "Facebook", Icon: Facebook },
    { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
    { key: "youtube", label: "YouTube", Icon: Youtube },
  ];
  const item = "flex items-center gap-2 whitespace-nowrap transition-colors hover:text-gold-champagne";

  return (
    <div
      className={`overflow-hidden bg-gradient-to-r from-[#14396E] via-[#1D4F8C] to-[#14396E] text-white/90 transition-all duration-500 ${
        hidden ? "max-h-0" : "max-h-10"
      }`}
    >
      <div className="container-site flex h-8 items-center justify-between gap-4 text-[12px] lg:h-9 lg:text-[13px]">
        <ul className="flex min-w-0 items-center gap-4 lg:gap-6">
          <li>
            <a href={tel ? `tel:${tel}` : "/contact"} className={item}>
              <Phone className="h-3.5 w-3.5 text-gold-champagne" strokeWidth={1.75} aria-hidden="true" />
              <span>{c.phone}</span>
            </a>
          </li>
          <li className="hidden sm:block">
            <a href={c.email.includes("@") ? `mailto:${c.email}` : "/contact"} className={item}>
              <Mail className="h-3.5 w-3.5 text-gold-champagne" strokeWidth={1.75} aria-hidden="true" />
              <span>{c.email}</span>
            </a>
          </li>
          <li className="hidden lg:flex items-center gap-2 whitespace-nowrap">
            <MapPin className="h-3.5 w-3.5 text-gold-champagne" strokeWidth={1.75} aria-hidden="true" />
            <span>{site.location}</span>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* WhatsApp button — number comes from site.js (contact.whatsapp) */}
          <a
            href={wa.length >= 10 ? `https://wa.me/${wa.length === 10 ? "91" + wa : wa}?text=${encodeURIComponent("Hello Aadarsh Awning, I would like a quote for an awning.")}` : "/contact"}
            target={wa.length >= 10 ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label="Chat with Aadarsh Awning on WhatsApp"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#25D366] px-3 py-1 text-[12px] font-semibold leading-none text-white shadow-sm transition-all hover:bg-[#1EBE5A] hover:shadow-md lg:text-[12.5px]"
          >
            <Whatsapp width={14} height={14} />
            <span>WhatsApp Us</span>
          </a>
          <span className="hidden h-4 w-px bg-white/25 md:block" aria-hidden="true" />
          <ul className="hidden items-center gap-3 md:flex" aria-label="Social media">
            {socials.map(({ key, label, Icon }) => (
              <li key={key}>
                <a href={site.social[key]} aria-label={label} className="block text-white/80 transition-colors hover:text-gold-champagne">
                  <Icon width={14} height={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const closeTimer = useRef();

  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && (setMobileOpen(false), setMenuOpen(false));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const openMenu = () => { clearTimeout(closeTimer.current); setMenuOpen(true); };
  const closeMenu = () => { closeTimer.current = setTimeout(() => setMenuOpen(false), 140); };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-navy">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FBF9F4]/90 shadow-[0_6px_24px_-14px_rgba(20,40,70,0.25)] backdrop-blur-md"
            : "bg-[#FBF9F4]"
        }`}
      >
        <TopBar hidden={scrolled} />
        <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          <Logo scrolled={scrolled} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-9">
              {navLinks.map((l) =>
                l.hasMenu ? (
                  <li key={l.to} className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                    <NavLink
                      to={l.to}
                      className={({ isActive }) => `nav-link group relative flex items-center gap-1 whitespace-nowrap py-2 font-serif text-[16px] font-medium text-navy xl:text-[18px] ${isActive ? "is-active" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={menuOpen}
                      onFocus={openMenu}
                    >
                      {l.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`} />
                      <NavUnderline />
                    </NavLink>
                    <ProductsMenu open={menuOpen} />
                  </li>
                ) : (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) => `nav-link group relative block whitespace-nowrap py-2 font-serif text-[16px] font-medium text-navy xl:text-[18px] ${isActive ? "is-active" : ""}`}
                    >
                      {l.label}
                      <NavUnderline />
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn btn-primary hidden !px-5 !py-2.5 !text-[15px] sm:inline-flex">
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center border border-beige bg-white/60 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className={`absolute h-px w-5 bg-navy transition-all duration-300 ${mobileOpen ? "rotate-45" : "-translate-y-[6px]"}`} />
              <span className={`absolute h-px w-5 bg-gold transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`absolute h-px w-5 bg-navy transition-all duration-300 ${mobileOpen ? "-rotate-45" : "translate-y-[6px]"}`} />
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden="true" />
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className={`fixed inset-x-0 bottom-0 z-[45] overflow-y-auto bg-cream lg:hidden ${scrolled ? "top-[65px]" : "top-[97px]"}`}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease }}
          >
            <nav aria-label="Mobile" className="container-site flex min-h-full flex-col py-8">
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
                className="divide-y divide-beige border-y border-beige"
              >
                {navLinks.map((l) => (
                  <motion.li
                    key={l.to}
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-4 font-serif text-[26px] ${isActive ? "text-gold" : "text-navy"}`
                      }
                    >
                      {l.label}
                      <ArrowRight className="h-5 w-5 text-gold" strokeWidth={1.25} />
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="mt-8">
                <p className="eyebrow eyebrow-gold mb-4">Our Products</p>
                <div className="flex flex-wrap gap-2">
                  {products.map((p) => (
                    <Link key={p.slug} to={`/products/${p.slug}`} className="border border-beige bg-white px-3 py-2 text-[13px] text-navy">
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary mt-auto w-full !py-4">
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavUnderline() {
  return (
    <span
      aria-hidden="true"
      className="nav-underline absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100 group-[.is-active]:scale-x-100"
    />
  );
}