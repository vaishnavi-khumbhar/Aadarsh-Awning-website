import { media } from "./media";

export const site = {
  name: "Aadarsh Awning",
  tagline: "Better Shade. Better Spaces. Since 2015.",
  location: "Mumbai, Andheri East",
  // Replace placeholders with real details. Do not publish until filled.
  contact: {
    phone: "[Phone Number]",
    whatsapp: "[WhatsApp Number]",
    email: "[Email Address]",
    address: "[Business Address]",
  },
  // Replace "#" with real profile URLs.
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products", hasMenu: true },
  { label: "Why Us", to: "/why-us" },
  { label: "Our Approach", to: "/approach" },
  { label: "Contact", to: "/contact" },
];

export const heroSlides = [
  {
    eyebrow: "Premium Awning & Outdoor Shade Solutions",
    line1: "Better Shade.",
    line2: "Better Spaces.",
    text: "Professional awning installation and outdoor shade solutions for residential, commercial, industrial, and customized projects.",
    image: media.hero.homeSlides[0],
    imageKey: "hero.homeSlides[0]",
  },
  {
    eyebrow: "Residential & Commercial Awnings",
    line1: "Shade That",
    line2: "Fits Your Space.",
    text: "From balconies and terraces to storefronts and cafés — awnings recommended around how your space is used.",
    image: media.hero.homeSlides[1],
    imageKey: "hero.homeSlides[1]",
  },
  {
    eyebrow: "Parking & Tensile Structures",
    line1: "Built for",
    line2: "Larger Projects.",
    text: "Car parking sheds and tensile structures for societies, offices, factories and large outdoor areas.",
    image: media.hero.homeSlides[2],
    imageKey: "hero.homeSlides[2]",
  },
];

export const segments = [
  { label: "Residential", icon: "Home" },
  { label: "Commercial", icon: "Building2" },
  { label: "Industrial", icon: "Factory" },
  { label: "Customized Projects", icon: "Settings" },
];

export const applications = [
  { label: "Residential", image: media.applications.residential, imageKey: "applications.residential" },
  { label: "Commercial", image: media.applications.commercial, imageKey: "applications.commercial" },
  { label: "Retail", image: media.applications.retail, imageKey: "applications.retail" },
  { label: "Restaurants & Cafés", image: media.applications.restaurants, imageKey: "applications.restaurants" },
  { label: "Parking Areas", image: media.applications.parking, imageKey: "applications.parking" },
  { label: "Industrial", image: media.applications.industrial, imageKey: "applications.industrial" },
  { label: "Large Outdoor Spaces", image: media.applications.largeOutdoor, imageKey: "applications.largeOutdoor" },
];

export const whyUs = [
  {
    title: "Experience Since 2015",
    text: "Years of practical experience in awning installation and shade solutions.",
    icon: "CalendarCheck",
  },
  {
    title: "Experienced Mounting Team",
    text: "Our skilled team focuses on proper fitting, installation, and finishing.",
    icon: "Wrench",
  },
  {
    title: "Trusted Frame Materials",
    text: "We use frame materials sourced from reliable and trusted brands.",
    icon: "ShieldCheck",
  },
  {
    title: "Product + Service Focus",
    text: "We believe a good awning is not only about the product, it is also about professional installation and dependable service.",
    icon: "Handshake",
  },
  {
    title: "Solutions for Every Project",
    text: "From small residential requirements to commercial and large-scale projects, we provide solutions according to project needs.",
    icon: "LayoutGrid",
  },
];

export const approach = [
  { no: "01", title: "Understand", text: "Understanding the requirement, space and application." },
  { no: "02", title: "Recommend", text: "Recommending a suitable awning or shade solution." },
  { no: "03", title: "Install", text: "Professional installation with attention to fitting and finishing." },
  { no: "04", title: "Support", text: "Dependable service focused on customer requirements." },
];

export const projectTypes = ["Residential", "Commercial", "Industrial", "Customized Project"];
