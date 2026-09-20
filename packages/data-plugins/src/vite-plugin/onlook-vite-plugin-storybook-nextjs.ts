import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@onlook/vite-plugin-storybook-nextjs',
  description: 'Onlook fork of vite-plugin-storybook-nextjs with the next/dist/compiled/react dual-instance fix from storybookjs/vite-plugin-storybook-nextjs#116.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'nextjs',
    'storybook',
    'vitest',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@onlook/vite-plugin-storybook-nextjs',
  },
  source: {
    npm: '@onlook/vite-plugin-storybook-nextjs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
