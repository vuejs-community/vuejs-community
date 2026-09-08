import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-shaking',
  description: 'Import modules as needed',
  icon: 'logos:rollupjs',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'rollup-plugin-import-shaking',
    'import-shaking',
    'rollup-plugin-import',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'fengxinming/rollup-plugins',
    npm: 'rollup-plugin-import-shaking',
  },
  links: {
    github: 'https://github.com/fengxinming/rollup-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-shaking',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
