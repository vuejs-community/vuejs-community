import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-injectcss',
  description: 'Inject CSS into JS when building a single file component',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'injectCssIntoJs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-injectcss',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 8,
    },
  },
})
