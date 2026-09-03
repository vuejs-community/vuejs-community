import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bun-csp',
  description: 'A Vite plugin that generates and injects a Content Security Policy (CSP) for your SPA application.',
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
  links: {
    github: 'https://github.com/maccuaa/vite-plugin-csp',
    npm: 'https://www.npmjs.com/package/vite-plugin-bun-csp',
  },
  stats: {
    downloads: {
      monthly: 515,
      weekly: 328,
    },
  },
})
