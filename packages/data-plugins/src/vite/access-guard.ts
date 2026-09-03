import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'access-guard',
  description: 'Multi-layer developer access control for build tools. Detect OS username, Git identity, and match against a blocklist to deny unauthorized access at build time and runtime.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'access-control',
    'blocklist',
    'vite-plugin',
    'build-guard',
    'developer-access',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/SakuraPuare/access-guard',
    npm: 'https://www.npmjs.com/package/access-guard',
  },
  stats: {
    downloads: {
      monthly: 1277,
      weekly: 70,
    },
  },
})
