import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nessframework/security',
  description: 'Secure development and preview headers for Ness.js applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ness',
    'nessjs',
    'plugin',
    'security',
    'headers',
    'csp',
    'content-security-policy',
    'vite-plugin',
    'http-headers',
    'referrer-policy',
    'permissions-policy',
    'x-frame-options',
  ],
  source: {
    github: 'leroyanders/Ness.js',
    npm: '@nessframework/security',
  },
  links: {
    github: 'https://github.com/leroyanders/Ness.js',
    npm: 'https://www.npmjs.com/package/@nessframework/security',
    website: 'https://nessjs.com/docs/plugins/security',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 647,
      weekly: 41,
    },
  },
})
