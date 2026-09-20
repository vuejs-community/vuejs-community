import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dts-bundle',
  description: 'Rollup plugin for bundling .d.ts files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'dts',
    'dts-bundle',
    'merge',
    'typescript',
    'typings',
  ],
  links: {
    github: 'https://github.com/dmitrytut/rollup-plugin-dts-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dts-bundle',
    website: 'https://github.com/dmitrytut/rollup-plugin-dts-bundle#readme',
  },
  source: {
    github: 'dmitrytut/rollup-plugin-dts-bundle',
    npm: 'rollup-plugin-dts-bundle',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1660,
      weekly: 340,
    },
  },
})
