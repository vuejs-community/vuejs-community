import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-contentstack',
  description: 'Create a Contentstack custom field without the SDK.',
  icon: 'logos:vite-icon',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'contentstack',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'rodneysantos/vite-plugin-contentstack',
    npm: 'vite-plugin-contentstack',
  },
  links: {
    github: 'https://github.com/rodneysantos/vite-plugin-contentstack',
    npm: 'https://www.npmjs.com/package/vite-plugin-contentstack',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
