import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-shadow-css-plugin',
  description: 'A Vite plugin that declares the bundled CSS into a const in the output JS.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-shadow-css-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-shadow-css-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
