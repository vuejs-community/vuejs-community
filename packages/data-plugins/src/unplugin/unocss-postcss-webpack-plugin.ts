import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unocss-postcss-webpack-plugin',
  description: 'webpack中，unocss 添加 postcss 编译',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unocss',
    'webpack',
    'unplugin',
    'autoprefixer',
    'vue',
    'rollup',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/unocss-postcss-webpack-plugin',
  },
  source: {
    npm: 'unocss-postcss-webpack-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
