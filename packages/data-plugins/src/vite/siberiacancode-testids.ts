import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@siberiacancode/testids',
  description: 'Generate, validate and audit data-testid constants from a single yaml schema',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'testid',
    'data-testid',
    'playwright',
    'e2e',
    'codegen',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/siberiacancode/core',
    npm: 'https://www.npmjs.com/package/@siberiacancode/testids',
  },
  stats: {
    downloads: {
      monthly: 117,
      weekly: 31,
    },
  },
})
