import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jiek/rollup-plugin-dts',
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
    github: 'NWYLZW/rollup-plugin-dts',
    npm: '@jiek/rollup-plugin-dts',
  },
  links: {
    github: 'https://github.com/NWYLZW/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@jiek/rollup-plugin-dts',
    website: 'https://github.com/NWYLZW/rollup-plugin-dts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 85,
      weekly: 13,
    },
  },
})
