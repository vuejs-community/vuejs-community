import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-add-version',
  description: 'vite构建过程中给js和css添加自定义版本号防止缓存',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/liuhean2021/vite-plugin-add-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-add-version',
    website: 'https://github.com/liuhean2021/vite-plugin-add-version#readme',
  },
  source: {
    github: 'liuhean2021/vite-plugin-add-version',
    npm: 'vite-plugin-add-version',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 107,
      weekly: 2,
    },
  },
})
