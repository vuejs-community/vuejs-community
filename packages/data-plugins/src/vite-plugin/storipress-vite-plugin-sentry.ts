import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@storipress/vite-plugin-sentry',
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
    github: 'https://github.com/storipress/vite-plugin-sentry',
    npm: 'https://www.npmjs.com/package/@storipress/vite-plugin-sentry',
    website: 'https://github.com/storipress/vite-plugin-sentry',
  },
  source: {
    github: 'storipress/vite-plugin-sentry',
    npm: '@storipress/vite-plugin-sentry',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
