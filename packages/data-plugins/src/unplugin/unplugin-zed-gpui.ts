import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-zed-gpui',
  description: 'Unplugin for zed-gpui tree-shaking optimization - removes unused zed-gpui methods from bundle',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/baendlorel/gpui-ts',
    npm: 'https://www.npmjs.com/package/unplugin-zed-gpui',
    website: 'https://github.com/baendlorel/gpui-ts#readme',
  },
  source: {
    github: 'baendlorel/gpui-ts',
    npm: 'unplugin-zed-gpui',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 7,
    },
  },
})
