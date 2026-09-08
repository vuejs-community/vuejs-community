import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-storybook-llm',
  description: 'Vite plugin to convert Storybook stories into LLM-friendly Markdown documentation',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-storybook-llm',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-storybook-llm',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
