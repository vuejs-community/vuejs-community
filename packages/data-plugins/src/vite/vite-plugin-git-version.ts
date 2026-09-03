import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-version',
  description: 'Automatically put the version file in your project dist folder',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-git-version',
    'git',
    'project',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xkloveme/vite-plugin-git-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-version',
  },
  stats: {
    downloads: {
      monthly: 71,
      weekly: 16,
    },
  },
})
