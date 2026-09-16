import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-shield',
  description: 'Always-on, self-contained security pack for Vite/React apps — one CSP/header policy across dev, preview, and production, with or without a backend, on any cloud.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'react',
    'security',
    'headers',
    'csp',
    'content-security-policy',
    'nonce',
    'sri',
    'subresource-integrity',
    'helmet',
    'express',
    'nginx',
    'security-headers',
    'xss-protection',
    'hsts',
    'clickjacking',
    'vite-plugin',
  ],
  source: {
    github: 'Power70/vite-shield',
    npm: 'vite-shield',
  },
  links: {
    github: 'https://github.com/Power70/vite-shield',
    npm: 'https://www.npmjs.com/package/vite-shield',
    website: 'https://github.com/Power70/vite-shield#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 13,
    },
  },
})
