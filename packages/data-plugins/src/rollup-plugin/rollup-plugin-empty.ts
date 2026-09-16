import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-empty',
  description: 'A rollup plugin for emptying dir or deleting files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'empty',
  ],
  source: {
    github: 'fengxinming/rollup-plugins',
    npm: 'rollup-plugin-empty',
  },
  links: {
    github: 'https://github.com/fengxinming/rollup-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-empty',
    website: 'https://github.com/fengxinming/rollup-plugins/tree/master/packages/rollup-plugin-empty#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 125,
      weekly: 19,
    },
  },
})
