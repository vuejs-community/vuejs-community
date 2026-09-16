import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dusk',
  description: 'Vite plugin for Dusk SDK',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'viteplugin',
    'vite-plugin',
    'dusk',
  ],
  source: {
    github: 'dusk-gg/dusk',
    npm: 'vite-plugin-dusk',
  },
  links: {
    github: 'https://github.com/dusk-gg/dusk',
    npm: 'https://www.npmjs.com/package/vite-plugin-dusk',
    website: 'https://github.com/dusk-gg/dusk#readme',
  },
  stats: {
    stars: 424,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
