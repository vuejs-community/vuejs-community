import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-storybook-nextjs',
  description: 'Vite plugin that enables Next.js features in Vite and Storybook',
  icon: 'logos:vite-icon',
  version: '10.6.0',
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
  source: {
    github: 'storybookjs/storybook',
    npm: 'vite-plugin-storybook-nextjs',
  },
  links: {
    github: 'https://github.com/storybookjs/storybook',
    npm: 'https://www.npmjs.com/package/vite-plugin-storybook-nextjs',
  },
  stats: {
    downloads: {
      monthly: 9284544,
      weekly: 2331261,
    },
  },
})
