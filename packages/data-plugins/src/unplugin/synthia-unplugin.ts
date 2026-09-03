import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'synthia-unplugin',
  description: 'Synthia Engine Unplugin - 跨平台插件系统，实现100%插件复用率',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'cross-platform',
    'synthia',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/synthia-unplugin',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
