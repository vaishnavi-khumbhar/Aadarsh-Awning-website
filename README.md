# Aadarsh Awning — Website

React + Vite + Tailwind + Framer Motion + React Router.

## Run
npm install
npm run dev      # local
npm run build    # production build in /dist

## Add your images (only one file to edit)
1. Put images in `src/assets/images/`
2. Open `src/data/media.js`, un-comment the matching import, replace `null` with it.
Blank slots on the site show their media.js key + recommended size, so you know what goes where.

## Fill before launch
- `src/data/site.js` → phone, WhatsApp, email, address, social links
  (once a real WhatsApp number is set, the quote form opens WhatsApp pre-filled)

## Content
- Products: `src/data/products.js`
- Why Us / Approach / Applications / hero slides: `src/data/site.js`

Hosting: `public/_redirects` (Netlify) and `vercel.json` (Vercel) handle page refreshes on inner routes.
