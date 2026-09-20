import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@arijs/vite-ssg',
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
  links: {
    github: 'https://github.com/arijs/vite-ssg',
    npm: 'https://www.npmjs.com/package/@arijs/vite-ssg',
    website: 'https://github.com/arijs/vite-ssg',
  },
  source: {
    github: 'arijs/vite-ssg',
    npm: '@arijs/vite-ssg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
