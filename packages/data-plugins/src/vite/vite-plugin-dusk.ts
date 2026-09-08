import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dusk',
  description: 'Vite plugin for Dusk SDK',
  icon: 'logos:vite-icon',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'viteplugin',
    'vite-plugin',
    'dusk',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'dusk-gg/dusk',
    npm: 'vite-plugin-dusk',
  },
  links: {
    github: 'https://github.com/dusk-gg/dusk',
    npm: 'https://www.npmjs.com/package/vite-plugin-dusk',
  },
  stats: {
    downloads: {
      monthly: 56,
      weekly: 9,
    },
  },
})
