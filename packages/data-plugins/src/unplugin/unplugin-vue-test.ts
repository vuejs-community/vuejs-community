import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-test',
  description: 'Transform Vue 3 SFC to JavaScript.',
  icon: 'icon:dark-unplugin',
  version: '4.3.5',
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
    npm: 'unplugin-vue-test',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-vue',
    npm: 'https://www.npmjs.com/package/unplugin-vue-test',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
