import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-xtpl',
  description: 'Rollup plugin to xtemplate templates',
  icon: 'logos:rollupjs',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'luzhuang/rollup-plugin-xtpl',
    npm: 'rollup-plugin-xtpl',
  },
  links: {
    github: 'https://github.com/luzhuang/rollup-plugin-xtpl',
    npm: 'https://www.npmjs.com/package/rollup-plugin-xtpl',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
