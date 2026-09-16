import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vuetify/vite-ssg',
  description: 'Server-side generation for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssg',
    'ssr',
  ],
  source: {
    github: 'vuetifyjs/vite-ssg',
    npm: '@vuetify/vite-ssg',
  },
  links: {
    github: 'https://github.com/vuetifyjs/vite-ssg',
    npm: 'https://www.npmjs.com/package/@vuetify/vite-ssg',
    website: 'https://github.com/vuetifyjs/vite-ssg',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 727,
      weekly: 71,
    },
  },
})
