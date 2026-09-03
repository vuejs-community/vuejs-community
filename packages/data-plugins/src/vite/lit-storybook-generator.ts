import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'lit-storybook-generator',
  description: 'A Vite plugin that generates Storybook files from LIT components',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'lit',
    'storybook',
    'web-components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/lit-storybook-generator',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 7,
    },
  },
})
