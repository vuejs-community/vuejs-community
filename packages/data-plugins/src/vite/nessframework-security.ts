import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nessframework/security',
  description: 'Secure development and preview headers for Ness.js applications.',
  version: '3.0.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/leroyanders/Ness.js',
    npm: 'https://www.npmjs.com/package/@nessframework/security',
  },
  stats: {
    downloads: {
      monthly: 1335,
      weekly: 116,
    },
  },
})
