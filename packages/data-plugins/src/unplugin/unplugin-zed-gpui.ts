import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-zed-gpui',
  description: 'Unplugin for zed-gpui tree-shaking optimization - removes unused zed-gpui methods from bundle',
  version: '0.0.8',
  category: 'plugin',
  tags: [
    'unplugin',
    'zed-gpui',
    'tree-shaking',
    'bundle',
    'optimization',
    'vite',
    'webpack',
    'rollup',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/baendlorel/gpui-ts',
    npm: 'https://www.npmjs.com/package/unplugin-zed-gpui',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 1,
    },
  },
})
