import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-auto-add',
  description: 'add content automatically during rollup packaging',
  icon: 'logos:rollupjs',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'rollup-auto-add',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'qlly0630/rollup-plugin-auto-add',
    npm: 'rollup-plugin-auto-add',
  },
  links: {
    github: 'https://github.com/qlly0630/rollup-plugin-auto-add',
    npm: 'https://www.npmjs.com/package/rollup-plugin-auto-add',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
