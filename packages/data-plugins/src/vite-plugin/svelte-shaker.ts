import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'svelte-shaker',
  description: 'Tree shaking for Svelte components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dead-code-elimination',
    'rollup',
    'svelte',
    'tree-shaker',
    'tree-shaking',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/baseballyama/svelte-shaker',
    npm: 'https://www.npmjs.com/package/svelte-shaker',
    website: 'https://github.com/baseballyama/svelte-shaker#readme',
  },
  source: {
    github: 'baseballyama/svelte-shaker',
    npm: 'svelte-shaker',
  },
  stats: {
    stars: 25,
    downloads: {
      monthly: 900,
      weekly: 151,
    },
  },
})
