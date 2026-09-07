import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-csp',
  description: 'Create CSP meta tags and header configs from all sources in the final Vite html',
  icon: '',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'CSP',
    'CSPs',
    'header',
    'security',
    'generate',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/josh-hemphill/vite-plugin-csp',
    npm: 'https://www.npmjs.com/package/vite-plugin-csp',
  },
  stats: {
    downloads: {
      monthly: 79367,
      weekly: 19058,
    },
  },
})
