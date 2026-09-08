import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-template-selector',
  description: 'A Vite plugin for Vue.js that allows dynamic template selection at build time.',
  icon: 'logos:vite-icon',
  version: '1.0.0-beta.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'template',
    'template-selector',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'tomheaton/vite-plugin-vue-template-selector',
    npm: 'vite-plugin-vue-template-selector',
  },
  links: {
    github: 'https://github.com/tomheaton/vite-plugin-vue-template-selector',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-template-selector',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
