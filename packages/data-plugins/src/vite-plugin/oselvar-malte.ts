import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oselvar/malte',
  description: 'A Vite plugin that syncs static content between Svelte components and sibling Markdown files at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svelte',
    'sveltekit',
    'markdown',
    'content',
    'i18n',
  ],
  source: {
    github: 'oselvar/malte',
    npm: '@oselvar/malte',
  },
  links: {
    github: 'https://github.com/oselvar/malte',
    npm: 'https://www.npmjs.com/package/@oselvar/malte',
    website: 'https://github.com/oselvar/malte#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 9,
    },
  },
})
