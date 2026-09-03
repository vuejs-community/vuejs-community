import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-add-gitinfo',
  description: 'Include git information in your vite build',
  version: '0.3.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'git',
    'vcs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-add-gitinfo',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
