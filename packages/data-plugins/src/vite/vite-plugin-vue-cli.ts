import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-cli',
  description: 'transform vue.config.js options to vite.config.ts options',
  icon: 'logos:vite-icon',
  version: '1.4.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vue-cli',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'IndexXuan/vite-plugin-vue-cli',
    npm: 'vite-plugin-vue-cli',
  },
  links: {
    github: 'https://github.com/IndexXuan/vite-plugin-vue-cli',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-cli',
  },
  stats: {
    downloads: {
      monthly: 338,
      weekly: 143,
    },
  },
})
