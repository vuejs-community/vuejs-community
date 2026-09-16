import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-csp',
  description: 'Create CSP meta tags and header configs from all sources in the final Vite html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'CSP',
    'CSPs',
    'header',
    'security',
    'generate',
  ],
  source: {
    github: 'josh-hemphill/vite-plugin-csp',
    npm: 'vite-plugin-csp',
  },
  links: {
    github: 'https://github.com/josh-hemphill/vite-plugin-csp',
    npm: 'https://www.npmjs.com/package/vite-plugin-csp',
    website: 'https://github.com/josh-hemphill/vite-plugin-csp#readme',
  },
  stats: {
    stars: 24,
    downloads: {
      monthly: 82272,
      weekly: 14481,
    },
  },
})
