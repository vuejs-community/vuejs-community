import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-html',
  description: 'HTML import plugin for rollup',
  icon: 'logos:rollupjs',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'html',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'bdadam/rollup-plugin-html',
    npm: 'rollup-plugin-html',
  },
  links: {
    github: 'https://github.com/bdadam/rollup-plugin-html',
    npm: 'https://www.npmjs.com/package/rollup-plugin-html',
  },
  stats: {
    downloads: {
      monthly: 32842,
      weekly: 9078,
    },
  },
})
