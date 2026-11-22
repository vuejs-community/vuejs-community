import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@molecule/app-e2e-preview',
  description: 'Drives the live IDE preview page as a Playwright-shaped page over a same-origin WebSocket through the dev server — no browser binary in the sandbox',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'molecule',
    'e2e',
    'preview',
    'playwright',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/molecule-dev/molecule',
    npm: 'https://www.npmjs.com/package/@molecule/app-e2e-preview',
    website: 'https://www.molecule.dev/packages/app-e2e-preview',
  },
  source: {
    github: 'molecule-dev/molecule',
    npm: '@molecule/app-e2e-preview',
  },
  stats: {
    stars: 44,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
