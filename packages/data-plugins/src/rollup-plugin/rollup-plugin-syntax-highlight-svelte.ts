import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-syntax-highlight-svelte',
  description: 'A plugin for Vite and Rollup that creates Svelte components with highlighted code directly from files using Shiki',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'svelte',
    'shiki',
  ],
  source: {
    github: 'valterkraemer/rollup-plugin-syntax-highlight',
    npm: 'rollup-plugin-syntax-highlight-svelte',
  },
  links: {
    github: 'https://github.com/valterkraemer/rollup-plugin-syntax-highlight',
    npm: 'https://www.npmjs.com/package/rollup-plugin-syntax-highlight-svelte',
    website: 'https://github.com/valterkraemer/rollup-plugin-syntax-highlight#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
