import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-version',
  description: 'Automatically put the version file in your project dist folder',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'xkloveme/vite-plugin-git-version',
    npm: 'vite-plugin-git-version',
  },
  links: {
    github: 'https://github.com/xkloveme/vite-plugin-git-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-version',
  },
  stats: {
    downloads: {
      monthly: 81,
      weekly: 24,
    },
  },
})
