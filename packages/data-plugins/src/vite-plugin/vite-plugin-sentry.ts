import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sentry',
  description: 'The unofficial Sentry plugin for Vite ⚡️',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'sentry',
    'sentry-cli',
    'sourcemap',
  ],
  links: {
    github: 'https://github.com/ikenfin/vite-plugin-sentry',
    npm: 'https://www.npmjs.com/package/vite-plugin-sentry',
    website: 'https://github.com/ikenfin/vite-plugin-sentry',
  },
  source: {
    github: 'ikenfin/vite-plugin-sentry',
    npm: 'vite-plugin-sentry',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 118212,
      weekly: 16672,
    },
  },
})
