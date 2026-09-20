import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-shaking',
  description: 'Import modules as needed',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'rollup-plugin-import-shaking',
    'import-shaking',
    'rollup-plugin-import',
  ],
  links: {
    github: 'https://github.com/fengxinming/rollup-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-shaking',
    website: 'https://github.com/fengxinming/rollup-plugins#readme',
  },
  source: {
    github: 'fengxinming/rollup-plugins',
    npm: 'rollup-plugin-import-shaking',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
