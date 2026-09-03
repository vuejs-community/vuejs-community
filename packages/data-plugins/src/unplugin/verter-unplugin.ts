import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@verter/unplugin',
  description: 'Universal Verter compiler plugin for Vue and Svelte across Vite, Rollup, webpack, esbuild, and compatible bundlers',
  version: '0.0.1-beta.3',
  category: 'plugin',
  tags: [
    'compiler',
    'rollup',
    'unplugin',
    'vite',
    'vue',
    'svelte',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/pikax/verter',
    npm: 'https://www.npmjs.com/package/@verter/unplugin',
  },
  stats: {
    downloads: {
      monthly: 185,
      weekly: 43,
    },
  },
})
