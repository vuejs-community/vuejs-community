import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-componentsjs',
  description: 'Transform wechat mini app components\'s js',
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
    npm: 'rollup-plugin-componentsjs',
  },
  links: {
    github: 'https://github.com/1eeing/rollup-plugin-wx-components',
    npm: 'https://www.npmjs.com/package/rollup-plugin-componentsjs',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
