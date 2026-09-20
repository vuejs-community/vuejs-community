import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@baicie/plugin-dts',
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
    github: 'https://github.com/baicie/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@baicie/plugin-dts',
    website: 'https://github.com/baicie/rollup-plugin-dts#readme',
  },
  source: {
    github: 'baicie/rollup-plugin-dts',
    npm: '@baicie/plugin-dts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 193,
      weekly: 6,
    },
  },
})
