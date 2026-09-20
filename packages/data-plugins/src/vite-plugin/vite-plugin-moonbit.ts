import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-moonbit',
  description: 'Vite plugin for MoonBit - import MoonBit modules with mbt: prefix',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'moonbit',
    'mbt',
  ],
  links: {
    github: 'https://github.com/mizchi/vite-plugin-moonbit',
    npm: 'https://www.npmjs.com/package/vite-plugin-moonbit',
    website: 'https://github.com/mizchi/vite-plugin-moonbit#readme',
  },
  source: {
    github: 'mizchi/vite-plugin-moonbit',
    npm: 'vite-plugin-moonbit',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 1994,
      weekly: 107,
    },
  },
})
