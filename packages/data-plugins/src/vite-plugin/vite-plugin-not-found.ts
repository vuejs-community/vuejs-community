import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-not-found',
  description: 'Automatically put the version file in your project dist folder',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-not-found',
    'git',
    'project',
    'version',
  ],
  source: {
    github: 'xkloveme/vite-plugin-not-found',
    npm: 'vite-plugin-not-found',
  },
  links: {
    github: 'https://github.com/xkloveme/vite-plugin-not-found',
    npm: 'https://www.npmjs.com/package/vite-plugin-not-found',
    website: 'https://github.com/xkloveme/vite-plugin-not-found#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
