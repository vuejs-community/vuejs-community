import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lang/rollup-plugin-dts',
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
  source: {
    github: 'Swatinem/rollup-plugin-dts',
    npm: '@lang/rollup-plugin-dts',
  },
  links: {
    github: 'https://github.com/Swatinem/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@lang/rollup-plugin-dts',
    website: 'https://github.com/Swatinem/rollup-plugin-dts#readme',
  },
  stats: {
    stars: 875,
    downloads: {
      monthly: 3502,
      weekly: 685,
    },
  },
})
