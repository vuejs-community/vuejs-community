import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-node-patch',
  description: 'Monkey patching node in vue template or jsx',
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
    'transform',
  ],
  source: {
    github: 'nooooooom/unplugin-vue-node-patch',
    npm: 'unplugin-vue-node-patch',
  },
  links: {
    github: 'https://github.com/nooooooom/unplugin-vue-node-patch',
    npm: 'https://www.npmjs.com/package/unplugin-vue-node-patch',
    website: 'https://github.com/nooooooom/unplugin-vue-node-patch#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
