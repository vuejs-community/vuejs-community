import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nodemon',
  description: 'Run a backend server in a Vite project via Nodemon',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'nodemon',
  ],
  links: {
    github: 'https://github.com/MomsFriendlyDevCo/vite-plugin-nodemon',
    npm: 'https://www.npmjs.com/package/vite-plugin-nodemon',
    website: 'https://github.com/MomsFriendlyDevCo/vite-plugin-nodemon#readme',
  },
  source: {
    github: 'MomsFriendlyDevCo/vite-plugin-nodemon',
    npm: 'vite-plugin-nodemon',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
