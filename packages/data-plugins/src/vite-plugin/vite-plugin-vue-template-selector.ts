import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-template-selector',
  description: 'A Vite plugin for Vue.js that allows dynamic template selection at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'template',
    'template-selector',
  ],
  source: {
    github: 'tomheaton/vite-plugin-vue-template-selector',
    npm: 'vite-plugin-vue-template-selector',
  },
  links: {
    github: 'https://github.com/tomheaton/vite-plugin-vue-template-selector',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-template-selector',
    website: 'https://github.com/tomheaton/vite-plugin-vue-template-selector',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
