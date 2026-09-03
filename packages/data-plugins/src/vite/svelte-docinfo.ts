import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'svelte-docinfo',
  description: 'static analysis for TypeScript and Svelte',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'svelte',
    'typescript',
    'documentation',
    'static-analysis',
    'api-docs',
    'component',
    'jsdoc',
    'tsdoc',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fuzdev/svelte-docinfo',
    npm: 'https://www.npmjs.com/package/svelte-docinfo',
  },
  stats: {
    downloads: {
      monthly: 543,
      weekly: 27,
    },
  },
})
