import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-publish',
  description: 'help the front end publish quickly',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'publish',
    'oss',
    'ftp',
  ],
  source: {
    github: 'lwp2333/vite-plugin-publish',
    npm: 'vite-plugin-publish',
  },
  links: {
    github: 'https://github.com/lwp2333/vite-plugin-publish',
    npm: 'https://www.npmjs.com/package/vite-plugin-publish',
    website: 'https://github.com/lwp2333/vite-plugin-publish/tree/master/#readme',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
