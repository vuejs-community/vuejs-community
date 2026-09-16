import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sveld',
  description: 'Generate TypeScript definitions and component documentation for your Svelte components.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'svelte component',
    'documentation',
    'docgen',
    'typescript',
    'definitions',
    'JSDocs',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'carbon-design-system/sveld',
    npm: 'sveld',
  },
  links: {
    github: 'https://github.com/carbon-design-system/sveld',
    npm: 'https://www.npmjs.com/package/sveld',
    website: 'https://github.com/carbon-design-system/sveld',
  },
  stats: {
    stars: 452,
    downloads: {
      monthly: 14695,
      weekly: 2499,
    },
  },
})
