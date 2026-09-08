import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dileep-git',
  description: 'Create a Git commit through Vite dev server',
  icon: 'logos:vite-icon',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'dileep',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-dileep-git',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-dileep-git',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 2,
    },
  },
})
