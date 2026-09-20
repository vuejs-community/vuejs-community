import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aboulbox/vite-plugin-rolling-release',
  description: 'A plugin to create a symlink to your custom build directory',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'frontend',
    'vite',
    'vite-plugin',
    'builder',
    'symlink',
    'vite-plugin-rolling-release',
  ],
  links: {
    github: 'https://github.com/aboul/vite-plugin-rolling-release',
    npm: 'https://www.npmjs.com/package/@aboulbox/vite-plugin-rolling-release',
    website: 'https://github.com/aboul/vite-plugin-rolling-release#readme',
  },
  source: {
    github: 'aboul/vite-plugin-rolling-release',
    npm: '@aboulbox/vite-plugin-rolling-release',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 8,
    },
  },
})
