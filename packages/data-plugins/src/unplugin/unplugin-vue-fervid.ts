import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-fervid',
  description: 'Transform Vue 3 SFC to JavaScript written in Rust.',
  version: '0.0.6',
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
    github: 'https://github.com/unplugin/unplugin-vue-fervid',
    npm: 'https://www.npmjs.com/package/unplugin-vue-fervid',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 6,
    },
  },
})
