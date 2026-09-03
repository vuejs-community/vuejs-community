import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'webpack-vite-serve',
  description: '为webpack项目提供一键接入Vite的能力',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'webpack',
    'vue',
    'react',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ATQQ/webpack-vite-serve',
    npm: 'https://www.npmjs.com/package/webpack-vite-serve',
  },
  stats: {
    downloads: {
      monthly: 115,
      weekly: 21,
    },
  },
})
