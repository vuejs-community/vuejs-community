import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@bluesyoung/unplugin-json-conf',
  description: '在运行/打包过程中，加载指定位置的JSON文件的内容作为虚拟模块的默认导出内容',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'json-conf',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/@bluesyoung/unplugin-json-conf',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 9,
    },
  },
})
