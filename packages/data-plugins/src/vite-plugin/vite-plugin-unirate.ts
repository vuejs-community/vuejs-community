import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unirate',
  description: 'Vite plugin for UniRate — a build-time `virtual:unirate` module with baked currency rates/currencies, plus a dev-server proxy that keeps your API key server-side.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'unirate',
    'currency',
    'exchange-rates',
    'forex',
    'money',
    'fx',
    'fintech',
  ],
  source: {
    github: 'UniRate-API/vite-plugin-unirate',
    npm: 'vite-plugin-unirate',
  },
  links: {
    github: 'https://github.com/UniRate-API/vite-plugin-unirate',
    npm: 'https://www.npmjs.com/package/vite-plugin-unirate',
    website: 'https://github.com/UniRate-API/vite-plugin-unirate#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 144,
      weekly: 144,
    },
  },
})
