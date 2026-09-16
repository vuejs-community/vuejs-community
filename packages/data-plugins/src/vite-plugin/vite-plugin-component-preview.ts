import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-component-preview',
  description: 'This plugin enables the Component Preview VS Code extension to work with Vue and Svelte..',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'component-preview',
    'vscode',
    'react',
    'vue',
    'svelte',
  ],
  source: {
    github: 'rioredwards/component-preview',
    npm: 'vite-plugin-component-preview',
  },
  links: {
    github: 'https://github.com/rioredwards/component-preview',
    npm: 'https://www.npmjs.com/package/vite-plugin-component-preview',
    website: 'https://github.com/rioredwards/component-preview/tree/main/packages/vite-plugin-component-preview',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
