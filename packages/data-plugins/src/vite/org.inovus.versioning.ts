import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'org.inovus.versioning',
  description: 'Stamp every Vite + React build with commit, branch, build time, and optional multi-app configuration. Designed for Cloudflare Pages but works with any CI that exposes commit and branch as env vars.',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'build-info',
    'cloudflare-pages',
    'react',
    'inovus',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/inovus/org.inovus.versioning',
    npm: 'https://www.npmjs.com/package/org.inovus.versioning',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 9,
    },
  },
})
