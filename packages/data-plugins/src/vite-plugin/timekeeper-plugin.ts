import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'timekeeper-plugin',
  description: '',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite plugin',
    'webpack-plugin',
    'webpack plugin',
    'module federation',
  ],
  links: {
    github: 'https://github.com/timekeeperjs/timekeeper-plugin',
    npm: 'https://www.npmjs.com/package/timekeeper-plugin',
    website: 'https://github.com/timekeeperjs/timekeeper-plugin#readme',
  },
  source: {
    github: 'timekeeperjs/timekeeper-plugin',
    npm: 'timekeeper-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
