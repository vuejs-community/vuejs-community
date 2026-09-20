import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@martinadamec/rollup-plugin-dts',
  description: 'An experiment to generate .d.ts rollup files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'typescript',
    'dts',
    '@types',
  ],
  links: {
    github: 'https://github.com/martinadamec/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@martinadamec/rollup-plugin-dts',
    website: 'https://github.com/Swatinem/rollup-plugin-dts#readme',
  },
  source: {
    github: 'martinadamec/rollup-plugin-dts',
    npm: '@martinadamec/rollup-plugin-dts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
