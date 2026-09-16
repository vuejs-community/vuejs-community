import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-multi-entry',
  description: 'Use multiple entry points for a bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'multi',
    'multiple',
    'entry',
    'entries',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-multi-entry',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-multi-entry',
    website: 'https://github.com/rollup/plugins/tree/master/packages/multi-entry/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 106978,
      weekly: 21016,
    },
  },
})
