import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-moonbit',
  description: 'Vite plugin for MoonBit - import MoonBit modules with mbt: prefix',
  icon: 'logos:vite-icon',
  version: '0.5.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'moonbit',
    'mbt',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'mizchi/vite-plugin-moonbit',
    npm: 'vite-plugin-moonbit',
  },
  links: {
    github: 'https://github.com/mizchi/vite-plugin-moonbit',
    npm: 'https://www.npmjs.com/package/vite-plugin-moonbit',
  },
  stats: {
    downloads: {
      monthly: 2561,
      weekly: 156,
    },
  },
})
