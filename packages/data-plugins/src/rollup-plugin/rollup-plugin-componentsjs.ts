import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-componentsjs',
  description: 'Transform wechat mini app components\'s js',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/1eeing/rollup-plugin-wx-components',
    npm: 'https://www.npmjs.com/package/rollup-plugin-componentsjs',
    website: 'https://github.com/1eeing/rollup-plugin-wx-components',
  },
  source: {
    github: '1eeing/rollup-plugin-wx-components',
    npm: 'rollup-plugin-componentsjs',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
