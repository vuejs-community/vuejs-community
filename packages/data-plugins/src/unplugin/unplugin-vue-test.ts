import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-test',
  description: 'Transform Vue 3 SFC to JavaScript.',
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
