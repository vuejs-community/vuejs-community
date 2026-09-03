import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'dist-info',
  description: '本地或线上打包时，将构建信息注入网页的一个插件',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'dist-info',
    'build-info',
    'vite-plugin',
    'vite-dist-info-plugin',
    'webpack-dist-info-plugin',
    '打包信息注入',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/1139874527/dist-info',
    npm: 'https://www.npmjs.com/package/dist-info',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 8,
    },
  },
})
