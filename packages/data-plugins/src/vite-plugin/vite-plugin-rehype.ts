import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rehype',
  description: 'Vite plugin for transforming HTML using Rehype',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rehype',
    'html',
  ],
  source: {
    github: 'keplersj/vite-plugin-rehype',
    npm: 'vite-plugin-rehype',
  },
  links: {
    github: 'https://github.com/keplersj/vite-plugin-rehype',
    npm: 'https://www.npmjs.com/package/vite-plugin-rehype',
    website: 'https://github.com/keplersj/vite-plugin-rehype#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 102,
      weekly: 4,
    },
  },
})
