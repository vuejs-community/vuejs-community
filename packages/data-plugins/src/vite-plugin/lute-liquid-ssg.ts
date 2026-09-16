import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lute/liquid-ssg',
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
    npm: '@lute/liquid-ssg',
  },
  links: {
    github: 'https://github.com/antfu/vite-ssg',
    npm: 'https://www.npmjs.com/package/@lute/liquid-ssg',
    website: 'https://github.com/antfu/vite-ssg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
