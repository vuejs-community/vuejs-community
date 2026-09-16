import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plus-kumo',
  description: 'High-performance Rust Vite & Vite-Plus plugin for enforcing Cloudflare Kumo UI standards and design system rules.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plus',
    'kumo-ui',
    'cloudflare',
    'design-system',
    'rust',
    'napi',
    'linter',
  ],
  source: {
    npm: 'vite-plus-kumo',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plus-kumo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 140,
      weekly: 26,
    },
  },
})
