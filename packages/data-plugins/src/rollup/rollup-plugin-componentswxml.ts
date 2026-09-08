import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-componentswxml',
  description: 'Transform wechat mini app components\'s wxml',
  icon: 'logos:rollupjs',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '1eeing/rollup-plugin-wx-components',
    npm: 'rollup-plugin-componentswxml',
  },
  links: {
    github: 'https://github.com/1eeing/rollup-plugin-wx-components',
    npm: 'https://www.npmjs.com/package/rollup-plugin-componentswxml',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
