import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-version',
  description: 'Automatically put the version file in your project dist folder',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-git-version',
    'git',
    'project',
    'version',
  ],
  links: {
    github: 'https://github.com/xkloveme/vite-plugin-git-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-version',
    website: 'https://github.com/xkloveme/vite-plugin-git-version#readme',
  },
  source: {
    github: 'xkloveme/vite-plugin-git-version',
    npm: 'vite-plugin-git-version',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 67,
      weekly: 4,
    },
  },
})
