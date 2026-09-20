import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@uwx/fsxt-rollup-plugin-dts',
  description: 'A rollup plugin that will bundle up your .d.ts definition files.',
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
    github: 'https://github.com/Swatinem/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@uwx/fsxt-rollup-plugin-dts',
    website: 'https://github.com/Swatinem/rollup-plugin-dts#readme',
  },
  source: {
    github: 'Swatinem/rollup-plugin-dts',
    npm: '@uwx/fsxt-rollup-plugin-dts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 44,
      weekly: 6,
    },
  },
})
