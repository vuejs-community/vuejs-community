import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'dist-info',
  description: '本地或线上打包时，将构建信息注入网页的一个插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dist-info',
    'build-info',
    'vite-plugin',
    'vite-dist-info-plugin',
    'webpack-dist-info-plugin',
    '打包信息注入',
  ],
  source: {
    github: '1139874527/dist-info',
    npm: 'dist-info',
  },
  links: {
    github: 'https://github.com/1139874527/dist-info',
    npm: 'https://www.npmjs.com/package/dist-info',
    website: 'https://github.com/1139874527/dist-info#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
