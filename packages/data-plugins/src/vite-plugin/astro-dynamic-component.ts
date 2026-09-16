import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'astro-dynamic-component',
  description: 'An Astro integration that enables dynamic component imports with glob patterns and client directives support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'astro',
    'astro-integration',
    'astro-component',
    'dynamic-import',
    'glob',
    'vite-plugin',
    'client-directive',
    'vue',
    'react',
    'svelte',
  ],
  source: {
    github: 'shjyh/astro-dynamic-component',
    npm: 'astro-dynamic-component',
  },
  links: {
    github: 'https://github.com/shjyh/astro-dynamic-component',
    npm: 'https://www.npmjs.com/package/astro-dynamic-component',
    website: 'https://github.com/shjyh/astro-dynamic-component#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 32,
      weekly: 9,
    },
  },
})
