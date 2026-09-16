import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proto',
  description: 'Plugin to allow importing .proto file as json objects.',
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
    github: 'Levyks/vite-plugin-proto',
    npm: 'vite-plugin-proto',
  },
  links: {
    github: 'https://github.com/Levyks/vite-plugin-proto',
    npm: 'https://www.npmjs.com/package/vite-plugin-proto',
    website: 'https://github.com/Levyks/vite-plugin-proto#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 465,
      weekly: 16,
    },
  },
})
