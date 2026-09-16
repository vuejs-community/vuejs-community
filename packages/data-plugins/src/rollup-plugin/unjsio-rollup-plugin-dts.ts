import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unjsio/rollup-plugin-dts',
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
  source: {
    github: 'Swatinem/rollup-plugin-dts',
    npm: '@unjsio/rollup-plugin-dts',
  },
  links: {
    github: 'https://github.com/Swatinem/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@unjsio/rollup-plugin-dts',
    website: 'https://github.com/Swatinem/rollup-plugin-dts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 410,
      weekly: 6,
    },
  },
})
