import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-add-gitinfo',
  description: 'Include git information in your vite build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'git',
    'vcs',
  ],
  source: {
    npm: 'vite-plugin-add-gitinfo',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-add-gitinfo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
