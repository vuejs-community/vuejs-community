import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@molecule/app-e2e-preview',
  description: 'E2E bond that drives the LIVE IDE preview as a Playwright-shaped page — the page the person is already looking at, in their own browser — over a same-origin WebSocket through the dev server. No browser binary in the sandbox.',
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
