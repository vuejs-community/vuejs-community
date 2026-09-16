import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-ionic-ssg',
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
    github: 'antfu/vite-ssg',
    npm: 'vite-ionic-ssg',
  },
  links: {
    github: 'https://github.com/antfu/vite-ssg',
    npm: 'https://www.npmjs.com/package/vite-ionic-ssg',
    website: 'https://github.com/antfu/vite-ssg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
