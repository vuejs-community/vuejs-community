import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-global-types',
  description: 'Vite plugin that collects exported types and interfaces into a generated global.d.ts, so you can use them without importing.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'codegen',
    'declaration',
    'dts',
    'global',
    'types',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/quentinjuarez/vite-plugin-global-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-global-types',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 3,
    },
  },
})
