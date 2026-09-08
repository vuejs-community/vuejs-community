import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-posthtml',
  description: 'PostHTML plugin for Rollup',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'html',
    'plugin',
    'post',
    'posthtml',
    'postprocess',
    'process',
    'rollup',
    'rollup-plugin',
    'tool',
    'util',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'tunnckoCore/rollup-plugin-posthtml',
    npm: 'rollup-plugin-posthtml',
  },
  links: {
    github: 'https://github.com/tunnckoCore/rollup-plugin-posthtml',
    npm: 'https://www.npmjs.com/package/rollup-plugin-posthtml',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
