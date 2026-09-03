import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ubiquitoustech/vite-plugin-ssr',
  description: 'Like Next.js / Nuxt but as do-one-thing-do-it-well Vite plugin',
  version: '0.3.13',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/brillout/vite-plugin-ssr',
    npm: 'https://www.npmjs.com/package/@ubiquitoustech/vite-plugin-ssr',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 6,
    },
  },
})
