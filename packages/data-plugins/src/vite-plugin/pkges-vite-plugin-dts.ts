import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pkges/vite-plugin-dts',
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
    'tsc',
  ],
  source: {
    github: 'jeanbarriere/vite-plugin-dts',
    npm: '@pkges/vite-plugin-dts',
  },
  links: {
    github: 'https://github.com/jeanbarriere/vite-plugin-dts',
    npm: 'https://www.npmjs.com/package/@pkges/vite-plugin-dts',
    website: 'https://github.com/jeanbarriere/vite-plugin-dts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
