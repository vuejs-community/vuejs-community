import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proto',
  description: 'Plugin to allow importing .proto file as json objects.',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Levyks/vite-plugin-proto',
    npm: 'vite-plugin-proto',
  },
  links: {
    github: 'https://github.com/Levyks/vite-plugin-proto',
    npm: 'https://www.npmjs.com/package/vite-plugin-proto',
  },
  stats: {
    downloads: {
      monthly: 542,
      weekly: 9,
    },
  },
})
