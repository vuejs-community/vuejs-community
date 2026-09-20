import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-init',
  description: 'rollup plugin to be able to invoke your bundled js when you want',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'init',
  ],
  links: {
    github: 'https://github.com/shouston3/rollup-plugin-init',
    npm: 'https://www.npmjs.com/package/rollup-plugin-init',
    website: 'https://github.com/shouston3/rollup-plugin-init#readme',
  },
  source: {
    github: 'shouston3/rollup-plugin-init',
    npm: 'rollup-plugin-init',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
