import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@foxford/den-plugin',
  description: 'Den build plugin — define* scanner, manifest generation, virtual Vike hooks',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'foxford',
    'den',
    'plugin',
    'vite',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/foxford/frontend-platform',
    npm: 'https://www.npmjs.com/package/@foxford/den-plugin',
    website: 'https://github.com/foxford/frontend-platform',
  },
  source: {
    github: 'foxford/frontend-platform',
    npm: '@foxford/den-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 38,
      weekly: 1,
    },
  },
})
