import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'webpack-vite-serve',
  description: '为webpack项目提供一键接入Vite的能力',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'webpack',
    'vue',
    'react',
    'vite-plugin',
  ],
  source: {
    github: 'ATQQ/webpack-vite-serve',
    npm: 'webpack-vite-serve',
  },
  links: {
    github: 'https://github.com/ATQQ/webpack-vite-serve',
    npm: 'https://www.npmjs.com/package/webpack-vite-serve',
    website: 'https://github.com/ATQQ/webpack-vite-serve#readme',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 46,
      weekly: 6,
    },
  },
})
