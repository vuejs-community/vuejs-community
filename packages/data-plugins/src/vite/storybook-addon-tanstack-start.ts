import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'storybook-addon-tanstack-start',
  description: 'Storybook addon for TanStack Start — Vite plugin that stubs server-side imports (createServerFn, server entries, cookies) so stories render without a server',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'storybook',
    'storybook-addon',
    'tanstack',
    'tanstack-router',
    'tanstack-start',
    'testing',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jonmumm/storybook-addon-tanstack-start',
    npm: 'https://www.npmjs.com/package/storybook-addon-tanstack-start',
  },
  stats: {
    downloads: {
      monthly: 2023,
      weekly: 536,
    },
  },
})
