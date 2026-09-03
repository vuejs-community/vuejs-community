import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sentry-sourcemap',
  description: 'The unofficial Sentry plugin for Vite ⚡️',
  version: '1.0.1',
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
    github: 'https://github.com/jiangqi-ola/vite-plugin-sentry-sourcemap',
    npm: 'https://www.npmjs.com/package/vite-plugin-sentry-sourcemap',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
