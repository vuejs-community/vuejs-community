import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lism-css/plugin',
  description: 'Build, Vite, Astro, and purge plugins for Lism CSS.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css-framework',
    'vite-plugin',
    'astro-integration',
  ],
  source: {
    github: 'lism-css/lism-css',
    npm: '@lism-css/plugin',
  },
  links: {
    github: 'https://github.com/lism-css/lism-css',
    npm: 'https://www.npmjs.com/package/@lism-css/plugin',
    website: 'https://lism-css.com/',
  },
  stats: {
    stars: 185,
    downloads: {
      monthly: 673,
      weekly: 371,
    },
  },
})
