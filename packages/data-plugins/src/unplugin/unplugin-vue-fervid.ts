import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-fervid',
  description: 'Transform Vue 3 SFC to JavaScript written in Rust.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'vue',
    'sfc',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
  ],
  links: {
    github: 'https://github.com/unplugin/unplugin-vue-fervid',
    npm: 'https://www.npmjs.com/package/unplugin-vue-fervid',
    website: 'https://github.com/unplugin/unplugin-vue-fervid#readme',
  },
  source: {
    github: 'unplugin/unplugin-vue-fervid',
    npm: 'unplugin-vue-fervid',
  },
  stats: {
    stars: 41,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
