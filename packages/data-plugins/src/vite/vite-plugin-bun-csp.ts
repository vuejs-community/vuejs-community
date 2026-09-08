import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bun-csp',
  description: 'A Vite plugin that generates and injects a Content Security Policy (CSP) for your SPA application.',
  icon: 'logos:vite-icon',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'csp',
    'content-security-policy',
    'bun',
    'spa',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'maccuaa/vite-plugin-csp',
    npm: 'vite-plugin-bun-csp',
  },
  links: {
    github: 'https://github.com/maccuaa/vite-plugin-csp',
    npm: 'https://www.npmjs.com/package/vite-plugin-bun-csp',
  },
  stats: {
    downloads: {
      monthly: 532,
      weekly: 52,
    },
  },
})
