import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'svelte-docinfo',
  description: 'static analysis for TypeScript and Svelte',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/fuzdev/svelte-docinfo',
    npm: 'https://www.npmjs.com/package/svelte-docinfo',
    website: 'https://svelte-docinfo.fuz.dev/',
  },
  source: {
    github: 'fuzdev/svelte-docinfo',
    npm: 'svelte-docinfo',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 315,
      weekly: 20,
    },
  },
})
