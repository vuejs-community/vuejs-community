import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@minar-kotonoha/vite-ssg',
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
    github: 'antfu-collective/vite-ssg',
    npm: '@minar-kotonoha/vite-ssg',
  },
  links: {
    github: 'https://github.com/antfu-collective/vite-ssg',
    npm: 'https://www.npmjs.com/package/@minar-kotonoha/vite-ssg',
    website: 'https://github.com/antfu-collective/vite-ssg',
  },
  stats: {
    stars: 1574,
    downloads: {
      monthly: 99,
      weekly: 7,
    },
  },
})
