import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bun-csp',
  description: 'A Vite plugin that generates and injects a Content Security Policy (CSP) for your SPA application.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'csp',
    'content-security-policy',
    'bun',
    'spa',
  ],
  links: {
    github: 'https://github.com/maccuaa/vite-plugin-csp',
    npm: 'https://www.npmjs.com/package/vite-plugin-bun-csp',
    website: 'https://github.com/maccuaa/vite-plugin-csp#readme',
  },
  source: {
    github: 'maccuaa/vite-plugin-csp',
    npm: 'vite-plugin-bun-csp',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 468,
      weekly: 18,
    },
  },
})
