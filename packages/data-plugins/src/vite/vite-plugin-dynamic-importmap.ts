import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dynamic-importmap',
  description: 'A Vite plugin that enables dynamic importmap loading by ensuring the importmap is fetched at runtime and gets applied before any other JavaScript runs',
  version: '2.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'importmap',
    'microfrontends',
    'single-spa',
    'root-config',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/adamsondavid/vite-plugin-dynamic-importmap',
    npm: 'https://www.npmjs.com/package/vite-plugin-dynamic-importmap',
  },
  stats: {
    downloads: {
      monthly: 77,
      weekly: 4,
    },
  },
})
