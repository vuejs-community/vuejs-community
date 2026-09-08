import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sentry-clean',
  description: 'The unofficial Sentry plugin for Vite ⚡️',
  icon: 'logos:vite-icon',
  version: '1.1.7',
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
    github: 'zhihaogit/vite-plugin-sentry-clean',
    npm: 'vite-plugin-sentry-clean',
  },
  links: {
    github: 'https://github.com/zhihaogit/vite-plugin-sentry-clean',
    npm: 'https://www.npmjs.com/package/vite-plugin-sentry-clean',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
