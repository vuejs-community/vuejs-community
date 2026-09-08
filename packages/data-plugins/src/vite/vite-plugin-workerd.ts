import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-workerd',
  description: 'A Vite plugin for authoring and building workerd config',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'workerd',
    'workers',
    'cloudflare',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'edmundhung/vite-plugin-workerd',
    npm: 'vite-plugin-workerd',
  },
  links: {
    github: 'https://github.com/edmundhung/vite-plugin-workerd',
    npm: 'https://www.npmjs.com/package/vite-plugin-workerd',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 0,
    },
  },
})
