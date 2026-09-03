import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@navarchus/cf-headers',
  description: 'Type-safe _headers file generator for Cloudflare Pages & Workers static assets, with a full catalog of HTTP response headers (status, deprecation, and reference info) and autocomplete for header names and values.',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'cloudflare',
    'cloudflare-pages',
    'cloudflare-workers',
    'headers',
    'http-headers',
    'security-headers',
    'cache-control',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/InvictusNavarchus/cf-headers',
    npm: 'https://www.npmjs.com/package/@navarchus/cf-headers',
  },
  stats: {
    downloads: {
      monthly: 84,
      weekly: 3,
    },
  },
})
