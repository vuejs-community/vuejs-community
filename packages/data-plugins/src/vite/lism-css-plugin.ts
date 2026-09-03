import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lism-css/plugin',
  description: 'Build, Vite, Astro, and purge plugins for Lism CSS.',
  version: '0.4.2',
  category: 'plugin',
  tags: [
    'css-framework',
    'vite-plugin',
    'astro-integration',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lism-css/lism-css',
    npm: 'https://www.npmjs.com/package/@lism-css/plugin',
  },
  stats: {
    downloads: {
      monthly: 507,
      weekly: 69,
    },
  },
})
