---
title: "Astro Portfolio"
publishedAt: 2018-05-23
description: "Astro portfolio is a portfolio template created with Astro and TailwindCSS."
slug: "astro-portfolio"
image: 
  src: "/opengraph-image.jpg"
  alt: "astro-portfolio"
github: "https://github.com/GRKdev/astro-portfolio"
website: "https://gorka.iand.dev/"
technologies:
  - name: "Astro"
    route: "/svg/astro.svg"
  - name: "JavaScript"
    route: "/svg/javascript.svg"
  - name: "TypeScript"
    route: "/svg/typescript.svg"
  - name: "CSS"
    route: "/svg/css.svg"
  - name: "TailwindCSS"
    route: "/svg/tailwind.svg"
  - name: "Vercel"
    route: "/svg/vercel.svg"
---

##  Astro - Portfolio

This portfolio is created/inspired by template from [Max](https://www.maxencewolff.com).

NB: Additional color themes can also be configured on the `src/data/theme.ts` file.

## Usage

- You can modify all the information in the files in the `data` folder (presentation, social links, projects list, colors).
- You can write articles in `markdown` format in the `content/projects` folder.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
