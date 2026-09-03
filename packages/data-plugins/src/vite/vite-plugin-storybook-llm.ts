import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-storybook-llm',
  description: 'Vite plugin to convert Storybook stories into LLM-friendly Markdown documentation',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'storybook',
    'llm',
    'documentation',
    'markdown',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-storybook-llm',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
