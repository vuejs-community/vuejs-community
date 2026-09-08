import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-not-found',
  description: 'Automatically put the version file in your project dist folder',
  icon: 'logos:vite-icon',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-not-found',
    'git',
    'project',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'xkloveme/vite-plugin-not-found',
    npm: 'vite-plugin-not-found',
  },
  links: {
    github: 'https://github.com/xkloveme/vite-plugin-not-found',
    npm: 'https://www.npmjs.com/package/vite-plugin-not-found',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
