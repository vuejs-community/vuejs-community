import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-syntax-highlight-svelte',
  description: 'A plugin for Vite and Rollup that creates Svelte components with highlighted code directly from files using Shiki',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'svelte',
    'shiki',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/valterkraemer/rollup-plugin-syntax-highlight',
    npm: 'https://www.npmjs.com/package/rollup-plugin-syntax-highlight-svelte',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
