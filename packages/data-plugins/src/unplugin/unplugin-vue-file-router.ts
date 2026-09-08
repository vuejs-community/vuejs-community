import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-file-router',
  description: 'File based router for vue-router',
  icon: 'icon:dark-unplugin',
  version: '0.2.1',
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
  source: {
    github: 'Cheng-DX/plugins',
    npm: 'unplugin-vue-file-router',
  },
  links: {
    github: 'https://github.com/Cheng-DX/plugins',
    npm: 'https://www.npmjs.com/package/unplugin-vue-file-router',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
