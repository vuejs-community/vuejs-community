import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-envloader',
  description: 'Inject Vite.js import.meta.env variables into process.env',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'env',
    'environment',
    'variables',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NicolaSpadari/vite-plugin-envloader',
    npm: 'https://www.npmjs.com/package/vite-plugin-envloader',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
