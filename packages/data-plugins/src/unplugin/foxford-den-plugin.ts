import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@foxford/den-plugin',
  description: 'Den build plugin — define* scanner, manifest generation, virtual Vike hooks',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'foxford',
    'den',
    'plugin',
    'vite',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@foxford/den-plugin',
  },
  stats: {
    downloads: {
      monthly: 332,
      weekly: 5,
    },
  },
})
