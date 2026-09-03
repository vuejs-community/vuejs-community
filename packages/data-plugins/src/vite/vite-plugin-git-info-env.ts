import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-info-env',
  description: 'A Vite plugin to inject git info into your app',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'git',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jinbekim/vite-plugin-git-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-info-env',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
