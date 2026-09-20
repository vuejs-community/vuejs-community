import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-publish-push',
  description: 'push to server after vite build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'publish',
    'build',
    'push',
    '推送',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-publish-push',
  },
  source: {
    npm: 'vite-plugin-publish-push',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
