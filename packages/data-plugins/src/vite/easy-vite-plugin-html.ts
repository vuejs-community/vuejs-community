import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@easy-vite/plugin-html',
  description: 'A Vite plugin to minify index.html, render it with EJS templates, inject entries, and support MPA — compatible with Vite 5-8',
  version: '5.0.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/easy-vite/plugin-html',
    npm: 'https://www.npmjs.com/package/@easy-vite/plugin-html',
  },
  stats: {
    downloads: {
      monthly: 761,
      weekly: 248,
    },
  },
})
