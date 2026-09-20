import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rfirefly/vite-ssg',
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
    github: 'https://github.com/rfirefly/vite-ssg',
    npm: 'https://www.npmjs.com/package/@rfirefly/vite-ssg',
    website: 'https://github.com/rfirefly/vite-ssg.git',
  },
  source: {
    github: 'rfirefly/vite-ssg',
    npm: '@rfirefly/vite-ssg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
