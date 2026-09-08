import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue',
  description: 'Transform Vue 3 SFC to JavaScript.',
  icon: 'icon:dark-unplugin',
  version: '7.2.0',
  category: 'plugin',
  tags: [
    'vue',
    'sfc',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'unplugin/unplugin-vue',
    npm: 'unplugin-vue',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-vue',
    npm: 'https://www.npmjs.com/package/unplugin-vue',
  },
  stats: {
    downloads: {
      monthly: 146999,
      weekly: 44962,
    },
  },
})
