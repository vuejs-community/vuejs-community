import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-node-patch',
  description: 'Monkey patching node in vue template or jsx',
  version: '0.0.6',
  category: 'plugin',
  tags: [
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
    github: 'https://github.com/nooooooom/unplugin-vue-node-patch',
    npm: 'https://www.npmjs.com/package/unplugin-vue-node-patch',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 7,
    },
  },
})
