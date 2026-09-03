import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@oselvar/malte',
  description: 'A Vite plugin that syncs static content between Svelte components and sibling Markdown files at build time.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'svelte',
    'sveltekit',
    'markdown',
    'content',
    'i18n',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/oselvar/malte',
    npm: 'https://www.npmjs.com/package/@oselvar/malte',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 6,
    },
  },
})
