import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssam-git',
  description: 'Create a Git commit through Vite dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ssam',
    'vite-plugin',
  ],
  source: {
    github: 'cdaein/vite-plugin-ssam-git',
    npm: 'vite-plugin-ssam-git',
  },
  links: {
    github: 'https://github.com/cdaein/vite-plugin-ssam-git',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssam-git',
    website: 'https://github.com/cdaein/vite-plugin-ssam-git#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 30,
      weekly: 6,
    },
  },
})
