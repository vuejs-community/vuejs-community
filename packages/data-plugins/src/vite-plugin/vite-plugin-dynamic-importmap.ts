import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dynamic-importmap',
  description: 'A Vite plugin that enables dynamic importmap loading by ensuring the importmap is fetched at runtime and gets applied before any other JavaScript runs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'importmap',
    'microfrontends',
    'single-spa',
    'root-config',
  ],
  links: {
    github: 'https://github.com/adamsondavid/vite-plugin-dynamic-importmap',
    npm: 'https://www.npmjs.com/package/vite-plugin-dynamic-importmap',
    website: 'https://github.com/adamsondavid/vite-plugin-dynamic-importmap#readme',
  },
  source: {
    github: 'adamsondavid/vite-plugin-dynamic-importmap',
    npm: 'vite-plugin-dynamic-importmap',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 31,
      weekly: 3,
    },
  },
})
