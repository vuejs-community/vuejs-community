import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@allardy/vite-plugin-sentry',
  description: 'The unofficial Sentry plugin for Vite ⚡️',
  version: '1.2.1',
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
  links: {
    github: 'https://github.com/ikenfin/vite-plugin-sentry',
    npm: 'https://www.npmjs.com/package/@allardy/vite-plugin-sentry',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 5,
    },
  },
})
