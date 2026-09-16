import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-storybook-nextjs',
  description: 'Vite plugin that enables Next.js features in Vite and Storybook',
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
  source: {
    github: 'storybookjs/storybook',
    npm: 'vite-plugin-storybook-nextjs',
  },
  links: {
    github: 'https://github.com/storybookjs/storybook',
    npm: 'https://www.npmjs.com/package/vite-plugin-storybook-nextjs',
    website: 'https://github.com/storybookjs/storybook/tree/next/code/lib/vite-plugin-storybook-nextjs',
  },
  stats: {
    stars: 91070,
    downloads: {
      monthly: 9788130,
      weekly: 2049770,
    },
  },
})
