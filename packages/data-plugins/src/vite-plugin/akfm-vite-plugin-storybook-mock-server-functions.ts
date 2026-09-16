import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@akfm/vite-plugin-storybook-mock-server-functions',
  description: 'Vite plugin that replaces Next.js Server Actions ("use server") with Storybook fn() mocks.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'next.js',
    'server-functions',
    'storybook',
    'vite-plugin',
  ],
  source: {
    github: 'AkifumiSato/vite-plugin-storybook-mock-server-functions',
    npm: '@akfm/vite-plugin-storybook-mock-server-functions',
  },
  links: {
    github: 'https://github.com/AkifumiSato/vite-plugin-storybook-mock-server-functions',
    npm: 'https://www.npmjs.com/package/@akfm/vite-plugin-storybook-mock-server-functions',
    website: 'https://github.com/AkifumiSato/vite-plugin-storybook-mock-server-functions#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6663,
      weekly: 2346,
    },
  },
})
