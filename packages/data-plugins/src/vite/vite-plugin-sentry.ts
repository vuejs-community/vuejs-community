import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sentry',
  description: 'The unofficial Sentry plugin for Vite ⚡️',
  icon: 'logos:vite-icon',
  version: '1.4.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'sentry',
    'sentry-cli',
    'sourcemap',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ikenfin/vite-plugin-sentry',
    npm: 'vite-plugin-sentry',
  },
  links: {
    github: 'https://github.com/ikenfin/vite-plugin-sentry',
    npm: 'https://www.npmjs.com/package/vite-plugin-sentry',
  },
  stats: {
    downloads: {
      monthly: 128452,
      weekly: 33884,
    },
  },
})
