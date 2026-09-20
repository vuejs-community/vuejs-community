import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-env',
  description: 'Provide VUE_APP_ env variables to VITE app',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'dotenv',
    'env',
    'vue',
    'vue-cli',
  ],
  links: {
    github: 'https://github.com/notiv-nt/vite-plugin-vue-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-env',
    website: 'https://github.com/notiv-nt/vite-plugin-vue-env#readme',
  },
  source: {
    github: 'notiv-nt/vite-plugin-vue-env',
    npm: 'vite-plugin-vue-env',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 70,
      weekly: 16,
    },
  },
})
