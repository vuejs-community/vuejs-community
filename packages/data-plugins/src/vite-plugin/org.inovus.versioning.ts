import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'org.inovus.versioning',
  description: 'Stamp every Vite + React build with commit, branch, build time, and optional multi-app configuration. Designed for Cloudflare Pages but works with any CI that exposes commit and branch as env vars.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'build-info',
    'cloudflare-pages',
    'react',
    'inovus',
  ],
  links: {
    github: 'https://github.com/inovus/org.inovus.versioning',
    npm: 'https://www.npmjs.com/package/org.inovus.versioning',
    website: 'https://github.com/inovus/org.inovus.versioning#readme',
  },
  source: {
    github: 'inovus/org.inovus.versioning',
    npm: 'org.inovus.versioning',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 6,
    },
  },
})
