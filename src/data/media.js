/* ==========================================================================
   AADARSH AWNING — CENTRAL MEDIA FILE
   --------------------------------------------------------------------------
   HOW TO ADD YOUR IMAGES  (no code editing needed)

   1. Copy your image into:   src/assets/images/
   2. Rename it to the EXACT name shown in the list below
      (any of .jpg  .jpeg  .png  .webp  .avif works)
   3. Save — the image appears on the site automatically.

   If a file is missing, that spot shows a blank labelled placeholder.
   To use a different file name, just change the name in quotes below.

   Recommended sizes:
   - Hero images ........ 1920 × 1080
   - Product images ..... 1200 × 900
   - Section images ..... 1400 × 1000
   - Application tiles .. 900 × 1100 (portrait)
   ========================================================================== */

// Loads every image inside src/assets/images automatically
const images = import.meta.glob("../assets/images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});
const brandFiles = import.meta.glob("../assets/*.{png,webp,svg,jpg,jpeg}", {
  eager: true,
  import: "default",
});

// Finds an image by name, ignoring the extension and upper/lower case
const find = (files, name) => {
  const key = Object.keys(files).find((path) => {
    const file = path.split("/").pop().replace(/\.[^.]+$/, "");
    return file.toLowerCase() === name.toLowerCase();
  });
  return key ? files[key] : null;
};
const img = (name) => find(images, name);

// Logo: uses src/assets/logor.png if present, otherwise src/assets/logo.*
const logo = find(brandFiles, "logor") || find(brandFiles, "logo");

export const media = {
  branding: {
    logo,
  },

  hero: {
    // Home hero slider — 3 slides
    homeSlides: [img("home-hero-1"), img("home-hero-2"), img("home-hero-3")],
    about: img("about-hero"),
    products: img("products-hero"),
    whyUs: img("why-us-hero"),
    approach: img("approach-hero"),
    contact: img("contact-hero1"),
  },

  products: {
    retractableArm: img("retractable-arm"),
    basketWindow: img("basket-window"),
    domeType: img("dome-type"),
    window: img("window-awning"),
    fixed: img("fixed-awning"),
    carParking: img("car-parking-shed"),
    tensile: img("tensile-shed"),
  },

  sections: {
    heroCorner: img("hero-corner"), // small angled image, bottom-right of home hero
    brandStory: img("brand-story"), // "Shade Designed Around Your Space"
    installation: img("installation"), // About page / Why Us
    customizedSolutions: img("customized-solutions"), // full-width CTA banner background
    aboutDetail: img("about-detail"), // About page second image
  },

  applications: {
    residential: img("app-residential"),
    commercial: img("app-commercial"),
    retail: img("app-retail"),
    restaurants: img("app-restaurants"),
    parking: img("app-parking"),
    industrial: img("app-industrial"),
    largeOutdoor: img("app-large-outdoor"),
  },
};