import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'storybook-addon-tanstack-start',
  description: 'Storybook addon for TanStack Start — Vite plugin that stubs server-side imports (createServerFn, server entries, cookies) so stories render without a server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'storybook',
    'storybook-addon',
    'tanstack',
    'tanstack-router',
    'tanstack-start',
    'testing',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jonmumm/storybook-addon-tanstack-start',
    npm: 'https://www.npmjs.com/package/storybook-addon-tanstack-start',
    website: 'https://github.com/jonmumm/storybook-addon-tanstack-start#readme',
  },
  source: {
    github: 'jonmumm/storybook-addon-tanstack-start',
    npm: 'storybook-addon-tanstack-start',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1853,
      weekly: 554,
    },
  },
})
