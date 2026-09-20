import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-valibot-env',
  description: 'A Vite plugin to validate environment variables against a Valibot schema',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'valibot',
  ],
  links: {
    github: 'https://github.com/idleberg/vite-plugin-valibot-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-valibot-env',
    website: 'https://github.com/idleberg/vite-plugin-valibot-env#readme',
  },
  source: {
    github: 'idleberg/vite-plugin-valibot-env',
    npm: 'vite-plugin-valibot-env',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 2406,
      weekly: 371,
    },
  },
})
