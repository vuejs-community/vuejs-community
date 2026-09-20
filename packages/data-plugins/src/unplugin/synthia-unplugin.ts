import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'synthia-unplugin',
  description: 'Synthia Engine Unplugin - 跨平台插件系统，实现100%插件复用率',
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
    'esbuild',
    'cross-platform',
    'synthia',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/synthia-unplugin',
  },
  source: {
    npm: 'synthia-unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
