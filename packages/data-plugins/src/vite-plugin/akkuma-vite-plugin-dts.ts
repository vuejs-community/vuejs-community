import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@akkuma/vite-plugin-dts',
  description: '<h1 align="center">vite-plugin-dts</h1>',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ts',
    'dts',
    'typescript',
  ],
  source: {
    github: 'qmhc/vite-plugin-dts',
    npm: '@akkuma/vite-plugin-dts',
  },
  links: {
    github: 'https://github.com/qmhc/vite-plugin-dts',
    npm: 'https://www.npmjs.com/package/@akkuma/vite-plugin-dts',
    website: 'https://github.com/qmhc/vite-plugin-dts#readme',
  },
  stats: {
    stars: 1526,
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
