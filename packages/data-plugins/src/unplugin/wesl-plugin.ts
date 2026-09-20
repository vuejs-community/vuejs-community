import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'wesl-plugin',
  description: '',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'rollup',
    'unplugin',
    'vite',
    'webgpu',
    'webpack',
    'wesl',
    'wgsl',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/wesl-plugin',
    website: 'https://github.com/webgpu-tools/wesl-js#readme',
  },
  source: {
    npm: 'wesl-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1966,
      weekly: 513,
    },
  },
})
