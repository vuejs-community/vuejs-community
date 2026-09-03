import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@akfm/vite-plugin-storybook-mock-server-functions',
  description: 'Vite plugin that replaces Next.js Server Actions ("use server") with Storybook fn() mocks.',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'next.js',
    'server-functions',
    'storybook',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AkifumiSato/vite-plugin-storybook-mock-server-functions',
    npm: 'https://www.npmjs.com/package/@akfm/vite-plugin-storybook-mock-server-functions',
  },
  stats: {
    downloads: {
      monthly: 3015,
      weekly: 2440,
    },
  },
})
