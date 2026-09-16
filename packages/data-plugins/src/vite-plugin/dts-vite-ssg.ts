import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dts/vite-ssg',
  description: 'Server-side generation for Vite (dts fork)',
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
    npm: '@dts/vite-ssg',
  },
  links: {
    github: 'https://github.com/antfu/vite-ssg',
    npm: 'https://www.npmjs.com/package/@dts/vite-ssg',
    website: 'https://github.com/antfu/vite-ssg',
  },
  stats: {
    stars: 1574,
    downloads: {
      monthly: 23,
      weekly: 9,
    },
  },
})
