import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-publish-push',
  description: 'push to server after vite build',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'publish',
    'build',
    'push',
    '推送',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-publish-push',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
