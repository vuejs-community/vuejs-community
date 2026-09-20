import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@o7/favicon',
  description: 'Automatically generate favicons for your Svelte app',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'favicon',
    'favicons',
    'webmanifest',
    'svg',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ottomated/o7-favicon',
    npm: 'https://www.npmjs.com/package/@o7/favicon',
    website: 'https://github.com/ottomated/o7-favicon#readme',
  },
  source: {
    github: 'ottomated/o7-favicon',
    npm: '@o7/favicon',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 48,
      weekly: 9,
    },
  },
})
