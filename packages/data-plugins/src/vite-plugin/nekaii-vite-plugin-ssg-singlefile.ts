import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nekaii/vite-plugin-ssg-singlefile',
  description: '',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-ssg',
    'inline',
    'html',
    'bundle',
    'single',
  ],
  links: {
    github: 'https://github.com/nexeora/vite-plugin-ssg-singlefile',
    npm: 'https://www.npmjs.com/package/@nekaii/vite-plugin-ssg-singlefile',
  },
  source: {
    github: 'nexeora/vite-plugin-ssg-singlefile',
    npm: '@nekaii/vite-plugin-ssg-singlefile',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 27,
      weekly: 3,
    },
  },
})
