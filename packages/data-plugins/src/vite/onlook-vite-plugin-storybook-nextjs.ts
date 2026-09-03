import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@onlook/vite-plugin-storybook-nextjs',
  description: 'Onlook fork of vite-plugin-storybook-nextjs with the next/dist/compiled/react dual-instance fix from storybookjs/vite-plugin-storybook-nextjs#116.',
  version: '3.1.5-onlook.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'nextjs',
    'storybook',
    'vitest',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@onlook/vite-plugin-storybook-nextjs',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 7,
    },
  },
})
