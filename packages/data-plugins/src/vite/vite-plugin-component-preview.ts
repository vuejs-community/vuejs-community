import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-component-preview',
  description: 'This plugin enables the Component Preview VS Code extension to work with Vue and Svelte..',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'component-preview',
    'vscode',
    'react',
    'vue',
    'svelte',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rioredwards/component-preview',
    npm: 'https://www.npmjs.com/package/vite-plugin-component-preview',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
