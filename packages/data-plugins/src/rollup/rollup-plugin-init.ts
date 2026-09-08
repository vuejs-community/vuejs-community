import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-init',
  description: 'rollup plugin to be able to invoke your bundled js when you want',
  icon: 'logos:rollupjs',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'init',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'shouston3/rollup-plugin-init',
    npm: 'rollup-plugin-init',
  },
  links: {
    github: 'https://github.com/shouston3/rollup-plugin-init',
    npm: 'https://www.npmjs.com/package/rollup-plugin-init',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
