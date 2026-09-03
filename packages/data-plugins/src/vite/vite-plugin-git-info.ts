import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-info',
  description: 'Automatically put the git info file in your project dist folder',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zhuchaoling/vite-plugin-git-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-info',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 0,
    },
  },
})
