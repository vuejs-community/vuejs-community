import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@easy-vite/plugin-html',
  description: 'A Vite plugin to minify index.html, render it with EJS templates, inject entries, and support MPA — compatible with Vite 5-8',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ejs',
    'html',
    'minify',
    'mpa',
    'multi-page',
    'template',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'easy-vite/plugin-html',
    npm: '@easy-vite/plugin-html',
  },
  links: {
    github: 'https://github.com/easy-vite/plugin-html',
    npm: 'https://www.npmjs.com/package/@easy-vite/plugin-html',
    website: 'https://github.com/easy-vite/plugin-html/tree/master/#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 587,
      weekly: 20,
    },
  },
})
