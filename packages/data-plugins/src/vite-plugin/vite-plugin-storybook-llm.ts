import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-storybook-llm',
  description: 'Vite plugin to convert Storybook stories into LLM-friendly Markdown documentation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'storybook',
    'llm',
    'documentation',
    'markdown',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-storybook-llm',
  },
  source: {
    npm: 'vite-plugin-storybook-llm',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
