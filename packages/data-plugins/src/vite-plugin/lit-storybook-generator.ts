import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lit-storybook-generator',
  description: 'A Vite plugin that generates Storybook files from LIT components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'lit',
    'storybook',
    'web-components',
  ],
  source: {
    npm: 'lit-storybook-generator',
  },
  links: {
    npm: 'https://www.npmjs.com/package/lit-storybook-generator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
