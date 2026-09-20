import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-remove-attributes',
  description: 'Removing data attributes from SFC at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'removing attributes',
    'vue-plugin',
  ],
  links: {
    github: 'https://github.com/cogor/vite-plugin-vue-remove-attributes',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-remove-attributes',
    website: 'https://github.com/cogor/vite-plugin-vue-remove-attributes#readme',
  },
  source: {
    github: 'cogor/vite-plugin-vue-remove-attributes',
    npm: 'vite-plugin-vue-remove-attributes',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
