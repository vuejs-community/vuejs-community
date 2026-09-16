import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-cli',
  description: 'transform vue.config.js options to vite.config.ts options',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vue-cli',
  ],
  source: {
    github: 'IndexXuan/vite-plugin-vue-cli',
    npm: 'vite-plugin-vue-cli',
  },
  links: {
    github: 'https://github.com/IndexXuan/vite-plugin-vue-cli',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-cli',
    website: 'https://github.com/IndexXuan/vite-plugin-vue-cli',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 297,
      weekly: 94,
    },
  },
})
