import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'access-guard',
  description: 'Multi-layer developer access control for build tools. Detect OS username, Git identity, and match against a blocklist to deny unauthorized access at build time and runtime.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'access-control',
    'blocklist',
    'vite-plugin',
    'build-guard',
    'developer-access',
  ],
  links: {
    github: 'https://github.com/SakuraPuare/access-guard',
    npm: 'https://www.npmjs.com/package/access-guard',
    website: 'https://github.com/SakuraPuare/access-guard#readme',
  },
  source: {
    github: 'SakuraPuare/access-guard',
    npm: 'access-guard',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 619,
      weekly: 44,
    },
  },
})
