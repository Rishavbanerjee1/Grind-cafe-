# The Daily Grind Café — Next.js

A responsive café website built with Next.js App Router, React, JavaScript and CSS Modules.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally

Open this folder in Antigravity or VS Code, then run:

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

For a production build:

```powershell
npm run build
npm run start
```

## Project structure

```text
app/
  about/
  contact/
  menu/
  globals.css
  home.module.css
  layout.js
  page.js
  robots.js
  sitemap.js
components/
  ContactForm.js
  Footer.js
  Header.js
  MenuBrowser.js
data/
  menu.js
```

## Where to edit content
- Homepage text and hero photo: `app/page.js`
- Homepage layout and overlapping heart stamp: `app/home.module.css`
- Café story: `app/about/page.js`
- Menu items and prices: `data/menu.js`
- Contact details: `app/contact/page.js` and `components/Footer.js`
- Global colors and typography: `app/globals.css`
- Header/footer: `components/Header.js` and `components/Footer.js`

## Important before publishing
This is a front-end demo. The café address, phone number, email, menu items and prices are placeholders. Replace them with verified business details.
The contact form validates fields in the browser but does not send or store messages. Connect a backend or email service before using it for real enquiries.
Images are loaded from Unsplash URLs and require an internet connection.
Replace `https://www.thedailygrind.example` in `app/layout.js`, `app/robots.js` and `app/sitemap.js` with the real production domain before launch.

## Dependency note
This project pins Next.js 16.4.6 and React 19.2.0. It does not use a PostCSS override or `next lint` script. Next.js 16 requires Node.js 20.9 or newer.
