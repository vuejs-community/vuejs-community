import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sctg/vite-plugin-github-pages-spa',
  description: 'Vite plugin to enable SPA (Single Page Application) support for GitHub Pages',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'github-pages',
    'spa',
    'single-page-application',
    'react',
    'vue',
    'svelte',
  ],
  source: {
    github: 'sctg-development/vite-plugin-github-pages-spa',
    npm: '@sctg/vite-plugin-github-pages-spa',
  },
  links: {
    github: 'https://github.com/sctg-development/vite-plugin-github-pages-spa',
    npm: 'https://www.npmjs.com/package/@sctg/vite-plugin-github-pages-spa',
    website: 'https://github.com/sctg-development/vite-plugin-github-pages-spa#readme',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 242,
      weekly: 37,
    },
  },
})
