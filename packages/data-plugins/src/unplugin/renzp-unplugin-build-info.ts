import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@renzp/unplugin-build-info',
  description: '一款将打包信息打印在控制台的webpack/Rspack/Vite/Rollup插件',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'build-info',
    'rspack',
    'rsbuild',
  ],
  source: {
    github: 'renzp94/unplugin-build-info',
    npm: '@renzp/unplugin-build-info',
  },
  links: {
    github: 'https://github.com/renzp94/unplugin-build-info',
    npm: 'https://www.npmjs.com/package/@renzp/unplugin-build-info',
    website: 'https://github.com/renzp94/unplugin-build-info#readme',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
