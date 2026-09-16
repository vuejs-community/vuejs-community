import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-dev-vite-plugin',
  description: 'vite dev plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
  ],
  source: {
    github: 'timor-m/vue-dev-plugin',
    npm: 'vue-dev-vite-plugin',
  },
  links: {
    github: 'https://github.com/timor-m/vue-dev-plugin',
    npm: 'https://www.npmjs.com/package/vue-dev-vite-plugin',
    website: 'https://github.com/timor-m/vue-dev-plugin#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
