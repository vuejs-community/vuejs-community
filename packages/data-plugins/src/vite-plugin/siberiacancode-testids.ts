import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@siberiacancode/testids',
  description: 'Generate, validate and audit data-testid constants from a single yaml schema',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'testid',
    'data-testid',
    'playwright',
    'e2e',
    'codegen',
    'vite-plugin',
  ],
  source: {
    github: 'siberiacancode/core',
    npm: '@siberiacancode/testids',
  },
  links: {
    github: 'https://github.com/siberiacancode/core',
    npm: 'https://www.npmjs.com/package/@siberiacancode/testids',
    website: 'https://github.com/siberiacancode/core',
  },
  stats: {
    stars: 34,
    downloads: {
      monthly: 139,
      weekly: 5,
    },
  },
})
