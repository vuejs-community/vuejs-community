import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-targz',
  description: 'A Vite plugin to create tar.gz archives of your build output',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tar',
    'gzip',
    'archive',
    'build',
  ],
  source: {
    github: 'lonecry/vite-plugin-tar',
    npm: 'vite-plugin-targz',
  },
  links: {
    github: 'https://github.com/lonecry/vite-plugin-tar',
    npm: 'https://www.npmjs.com/package/vite-plugin-targz',
    website: 'https://github.com/lonecry/vite-plugin-tar',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
