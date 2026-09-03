import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@renzp/unplugin-build-info',
  description: '一款将打包信息打印在控制台的webpack/Rspack/Vite/Rollup插件',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'build-info',
    'rspack',
    'rsbuild',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/renzp94/unplugin-build-info',
    npm: 'https://www.npmjs.com/package/@renzp/unplugin-build-info',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
