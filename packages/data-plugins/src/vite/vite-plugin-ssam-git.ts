import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssam-git',
  description: 'Create a Git commit through Vite dev server',
  icon: 'logos:vite-icon',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'ssam',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'cdaein/vite-plugin-ssam-git',
    npm: 'vite-plugin-ssam-git',
  },
  links: {
    github: 'https://github.com/cdaein/vite-plugin-ssam-git',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssam-git',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 14,
    },
  },
})
