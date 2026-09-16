import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bluesyoung/unplugin-json-conf',
  description: '在运行/打包过程中，加载指定位置的JSON文件的内容作为虚拟模块的默认导出内容',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'json-conf',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'antfu/unplugin-starter',
    npm: '@bluesyoung/unplugin-json-conf',
  },
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/@bluesyoung/unplugin-json-conf',
    website: 'https://github.com/antfu/unplugin-starter#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
