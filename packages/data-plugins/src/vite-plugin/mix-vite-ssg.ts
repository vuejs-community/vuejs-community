import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mix-vite-ssg',
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
    github: 'https://github.com/antfu/vite-ssg',
    npm: 'https://www.npmjs.com/package/mix-vite-ssg',
    website: 'https://github.com/antfu/vite-ssg',
  },
  source: {
    github: 'antfu/vite-ssg',
    npm: 'mix-vite-ssg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
