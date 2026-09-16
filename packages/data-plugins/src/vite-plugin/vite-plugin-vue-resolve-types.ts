import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-resolve-types',
  description: 'Resolve script setup defineProps types to runtime props in Vue SFC',
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
    github: 'aibayanyu20/vite-plugins',
    npm: 'vite-plugin-vue-resolve-types',
  },
  links: {
    github: 'https://github.com/aibayanyu20/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-resolve-types',
    website: 'https://github.com/aibayanyu20/vite-plugins/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 48,
      weekly: 6,
    },
  },
})
