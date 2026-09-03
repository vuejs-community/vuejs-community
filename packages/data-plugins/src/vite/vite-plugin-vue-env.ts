import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-env',
  description: 'Provide VUE_APP_ env variables to VITE app',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'dotenv',
    'env',
    'vue',
    'vue-cli',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/notiv-nt/vite-plugin-vue-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-env',
  },
  stats: {
    downloads: {
      monthly: 108,
      weekly: 29,
    },
  },
})
