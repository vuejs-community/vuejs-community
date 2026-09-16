import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue',
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
  source: {
    github: 'unplugin/unplugin-vue',
    npm: 'unplugin-vue',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-vue',
    npm: 'https://www.npmjs.com/package/unplugin-vue',
    website: 'https://github.com/unplugin/unplugin-vue#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 150538,
      weekly: 29915,
    },
  },
})
