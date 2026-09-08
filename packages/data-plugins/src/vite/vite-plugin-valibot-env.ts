import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-valibot-env',
  description: 'A Vite plugin to validate environment variables against a Valibot schema',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'valibot',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'idleberg/vite-plugin-valibot-env',
    npm: 'vite-plugin-valibot-env',
  },
  links: {
    github: 'https://github.com/idleberg/vite-plugin-valibot-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-valibot-env',
  },
  stats: {
    downloads: {
      monthly: 2220,
      weekly: 644,
    },
  },
})
