import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-componentswxml',
  description: 'Transform wechat mini app components\'s wxml',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: '1eeing/rollup-plugin-wx-components',
    npm: 'rollup-plugin-componentswxml',
  },
  links: {
    github: 'https://github.com/1eeing/rollup-plugin-wx-components',
    npm: 'https://www.npmjs.com/package/rollup-plugin-componentswxml',
    website: 'https://github.com/1eeing/rollup-plugin-wx-components',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
