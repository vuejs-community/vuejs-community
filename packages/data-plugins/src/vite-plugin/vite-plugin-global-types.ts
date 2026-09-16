import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-global-types',
  description: 'Vite plugin that collects exported types and interfaces into a generated global.d.ts, so you can use them without importing.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'quentinjuarez/vite-plugin-global-types',
    npm: 'vite-plugin-global-types',
  },
  links: {
    github: 'https://github.com/quentinjuarez/vite-plugin-global-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-global-types',
    website: 'https://github.com/quentinjuarez/vite-plugin-global-types#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
