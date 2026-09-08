import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rhtml',
  description: 'create html with the bundle file',
  icon: 'logos:rollupjs',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'html',
    'bundle-html',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'objectBao/rollup-plugin-rhtml',
    npm: 'rollup-plugin-rhtml',
  },
  links: {
    github: 'https://github.com/objectBao/rollup-plugin-rhtml',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rhtml',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
