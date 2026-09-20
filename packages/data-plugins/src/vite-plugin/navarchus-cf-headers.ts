import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@navarchus/cf-headers',
  description: 'Type-safe _headers file generator for Cloudflare Pages & Workers static assets, with a full catalog of HTTP response headers (status, deprecation, and reference info) and autocomplete for header names and values.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/InvictusNavarchus/cf-headers',
    npm: 'https://www.npmjs.com/package/@navarchus/cf-headers',
    website: 'https://github.com/InvictusNavarchus/cf-headers#readme',
  },
  source: {
    github: 'InvictusNavarchus/cf-headers',
    npm: '@navarchus/cf-headers',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 67,
      weekly: 21,
    },
  },
})
