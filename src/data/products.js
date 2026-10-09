import { media } from "./media";

/*
  All product content lives here. Descriptions and "Ideal For" are the
  approved client copy. `features` only restate what the approved copy says —
  no technical specifications, warranties or claims have been added.
*/

export const products = [
  {
    id: 1,
    slug: "retractable-arm-awnings",
    name: "Retractable Arm Awnings",
    category: "Flexible Shade",
    image: media.products.retractableArm,
    imageKey: "products.retractableArm",
    shortDescription:
      "Flexible shade that extends when you need it and retracts when you don't.",
    description: [
      "Retractable arm awnings are flexible shade solutions that can be extended when shade is required and retracted when not in use.",
      "They are suitable for areas such as balconies, terraces, storefronts, cafés, windows, and outdoor seating spaces.",
    ],
    idealFor: "Homes, shops, restaurants, balconies, terraces, and commercial spaces.",
    applications: ["Homes", "Shops", "Restaurants", "Balconies", "Terraces", "Commercial spaces"],
    features: [
      { title: "Extend on demand", text: "Open the awning when shade is required." },
      { title: "Retract when not in use", text: "Fold it back to keep the space open." },
      { title: "Versatile placement", text: "Suits balconies, terraces, storefronts, cafés and windows." },
    ],
  },
  {
    id: 2,
    slug: "basket-window-awnings",
    name: "Basket Window Awnings",
    category: "Decorative",
    image: media.products.basketWindow,
    imageKey: "products.basketWindow",
    shortDescription:
      "A stylish, decorative profile that protects windows from direct sun and weather.",
    description: [
      "Basket window awnings offer a stylish and decorative appearance while also providing protection from direct sunlight and weather exposure.",
      "Their distinctive design makes them suitable for windows, shops, cafés, restaurants, and commercial building exteriors.",
    ],
    idealFor: "Windows, boutiques, cafés, restaurants, offices, and retail stores.",
    applications: ["Windows", "Boutiques", "Cafés", "Restaurants", "Offices", "Retail stores"],
    features: [
      { title: "Decorative appearance", text: "A distinctive shape that adds style to the facade." },
      { title: "Sun protection", text: "Shields windows from direct sunlight." },
      { title: "Weather protection", text: "Reduces exposure to outdoor weather." },
    ],
  },
  {
    id: 3,
    slug: "dome-type-awnings",
    name: "Dome Type Awnings",
    category: "Architectural",
    image: media.products.domeType,
    imageKey: "products.domeType",
    shortDescription:
      "A curved structure that adds character to entrances and windows.",
    description: [
      "Dome type awnings feature an attractive curved structure that adds character to entrances and windows while offering effective shade.",
      "They are a good choice for spaces where appearance and functionality are equally important.",
    ],
    idealFor: "Entrances, windows, hotels, restaurants, shops, and commercial properties.",
    applications: ["Entrances", "Windows", "Hotels", "Restaurants", "Shops", "Commercial properties"],
    features: [
      { title: "Curved structure", text: "An attractive dome profile with character." },
      { title: "Effective shade", text: "Shade for entrances and windows." },
      { title: "Form and function", text: "For spaces where appearance matters as much as use." },
    ],
  },
  {
    id: 4,
    slug: "window-awnings",
    name: "Window Awnings",
    category: "Residential & Commercial",
    image: media.products.window,
    imageKey: "products.window",
    shortDescription:
      "Reduce direct sunlight and protect windows while lifting the exterior look.",
    description: [
      "Window awnings help reduce direct sunlight and provide additional protection to windows from outdoor weather conditions.",
      "They can also enhance the exterior appearance of residential and commercial buildings.",
    ],
    idealFor: "Homes, apartments, offices, shops, and commercial properties.",
    applications: ["Homes", "Apartments", "Offices", "Shops", "Commercial properties"],
    features: [
      { title: "Less direct sunlight", text: "Helps reduce sun coming through windows." },
      { title: "Added protection", text: "Extra cover from outdoor weather conditions." },
      { title: "Better exteriors", text: "Enhances the look of the building." },
    ],
  },
  {
    id: 5,
    slug: "fixed-awnings",
    name: "Fixed Awnings",
    category: "Permanent Shade",
    image: media.products.fixed,
    imageKey: "products.fixed",
    shortDescription:
      "Permanent shade with a stable structure for continuous protection.",
    description: [
      "Fixed awnings provide permanent shade for areas that need continuous protection.",
      "Their stable structure makes them suitable for entrances, windows, outdoor spaces, shops, and commercial properties.",
    ],
    idealFor: "Entrances, windows, storefronts, balconies, and outdoor areas.",
    applications: ["Entrances", "Windows", "Storefronts", "Balconies", "Outdoor areas"],
    features: [
      { title: "Permanent shade", text: "Always-on cover for areas that need it." },
      { title: "Stable structure", text: "A fixed frame built to stay in place." },
      { title: "Wide suitability", text: "Entrances, windows, shops and outdoor spaces." },
    ],
  },
  {
    id: 6,
    slug: "car-parking-sheds",
    name: "Car Parking Sheds",
    category: "Parking",
    image: media.products.carParking,
    imageKey: "products.carParking",
    shortDescription:
      "Professionally installed shade to protect vehicles and parking areas.",
    description: [
      "Protect your vehicle and parking area with a professionally installed car parking shade or parking shed.",
      "Our car parking shed solutions are suitable for residential societies, commercial properties, offices, factories, and private parking spaces.",
    ],
    idealFor:
      "Residential parking, apartments, offices, commercial complexes, and industrial premises.",
    applications: ["Residential parking", "Apartments", "Offices", "Commercial complexes", "Industrial premises"],
    features: [
      { title: "Vehicle protection", text: "Shade and cover for parked vehicles." },
      { title: "Professional installation", text: "Installed by our mounting team." },
      { title: "Any scale", text: "From private spaces to societies and factories." },
    ],
  },
  {
    id: 7,
    slug: "tensile-sheds",
    name: "Tensile Sheds",
    category: "Large Spaces",
    image: media.products.tensile,
    imageKey: "products.tensile",
    shortDescription:
      "Modern, practical shade structures for larger outdoor spaces.",
    description: [
      "Tensile sheds provide a modern and practical shade solution for larger outdoor spaces.",
      "Their contemporary structure makes them suitable for parking spaces, entrances, outdoor seating areas, commercial properties, and project-based requirements.",
    ],
    idealFor: "Parking areas, commercial spaces, institutions, outdoor areas, and large projects.",
    applications: ["Parking areas", "Commercial spaces", "Institutions", "Outdoor areas", "Large projects"],
    features: [
      { title: "Contemporary look", text: "A modern structure for open areas." },
      { title: "Large-area coverage", text: "Practical shade for bigger outdoor spaces." },
      { title: "Project ready", text: "Suited to project-based requirements." },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const getRelated = (slug, count = 3) => {
  const i = products.findIndex((p) => p.slug === slug);
  return Array.from({ length: count }, (_, k) => products[(i + k + 1) % products.length]);
};
