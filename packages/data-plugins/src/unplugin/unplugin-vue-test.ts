import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-test',
  description: 'Transform Vue 3 SFC to JavaScript.',
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
    github: 'https://github.com/unplugin/unplugin-vue',
    npm: 'https://www.npmjs.com/package/unplugin-vue-test',
    website: 'https://github.com/unplugin/unplugin-vue#readme',
  },
  source: {
    github: 'unplugin/unplugin-vue',
    npm: 'unplugin-vue-test',
  },
  stats: {
    stars: 273,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
