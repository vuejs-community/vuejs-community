import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-workerd',
  description: 'A Vite plugin for authoring and building workerd config',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'workerd',
    'workers',
    'cloudflare',
  ],
  source: {
    github: 'edmundhung/vite-plugin-workerd',
    npm: 'vite-plugin-workerd',
  },
  links: {
    github: 'https://github.com/edmundhung/vite-plugin-workerd',
    npm: 'https://www.npmjs.com/package/vite-plugin-workerd',
    website: 'https://github.com/edmundhung/vite-plugin-workerd',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2,
      weekly: 0,
    },
  },
})
