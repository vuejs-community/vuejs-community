import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bugsnag/vite-plugin-bugsnag',
  description: 'Vite plugins for common BugSnag actions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'bugsnag',
    'sourcemaps',
  ],
  links: {
    github: 'https://github.com/bugsnag/vite-plugin-bugsnag',
    npm: 'https://www.npmjs.com/package/@bugsnag/vite-plugin-bugsnag',
    website: 'https://github.com/bugsnag/vite-plugin-bugsnag#readme',
  },
  source: {
    github: 'bugsnag/vite-plugin-bugsnag',
    npm: '@bugsnag/vite-plugin-bugsnag',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 70313,
      weekly: 14191,
    },
  },
})
