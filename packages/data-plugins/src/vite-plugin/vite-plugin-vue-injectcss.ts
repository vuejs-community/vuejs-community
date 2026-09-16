import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-injectcss',
  description: 'Inject CSS into JS when building a single file component',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'injectCssIntoJs',
  ],
  source: {
    npm: 'vite-plugin-vue-injectcss',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-injectcss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 1,
    },
  },
})
