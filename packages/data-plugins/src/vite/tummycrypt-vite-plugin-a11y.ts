import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tummycrypt/vite-plugin-a11y',
  description: 'Vite plugin for accessibility validation of Svelte components - WCAG compliance checking at build time',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'accessibility',
    'a11y',
    'wcag',
    'svelte',
    'contrast',
    'aria',
    'validation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tinyland-inc/tinyland.dev',
    npm: 'https://www.npmjs.com/package/@tummycrypt/vite-plugin-a11y',
  },
  stats: {
    downloads: {
      monthly: 1300,
      weekly: 514,
    },
  },
})
