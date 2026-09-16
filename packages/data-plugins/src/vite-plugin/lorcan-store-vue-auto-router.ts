import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lorcan-store/vue-auto-router',
  description: 'A Vite plugin for auto-generating Vue router configuration with smart naming conventions and custom templates',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vue-router',
    'route-generator',
    'auto-router',
    'vue3',
    'lorcan-store',
  ],
  source: {
    github: 'lorcan-cloud/vue-auto-router',
    npm: '@lorcan-store/vue-auto-router',
  },
  links: {
    github: 'https://github.com/lorcan-cloud/vue-auto-router',
    npm: 'https://www.npmjs.com/package/@lorcan-store/vue-auto-router',
    website: 'https://github.com/lorcan-cloud/vue-auto-router#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 26,
      weekly: 5,
    },
  },
})
