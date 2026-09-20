import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-envloader',
  description: 'Inject Vite.js import.meta.env variables into process.env',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'env',
    'environment',
    'variables',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  links: {
    github: 'https://github.com/NicolaSpadari/vite-plugin-envloader',
    npm: 'https://www.npmjs.com/package/vite-plugin-envloader',
    website: 'https://github.com/NicolaSpadari/vite-plugin-envloader',
  },
  source: {
    github: 'NicolaSpadari/vite-plugin-envloader',
    npm: 'vite-plugin-envloader',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
