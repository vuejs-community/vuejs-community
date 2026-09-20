import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tummycrypt/vite-plugin-a11y',
  description: 'Vite plugin for accessibility validation of Svelte components - WCAG compliance checking at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/tinyland-inc/tinyland.dev',
    npm: 'https://www.npmjs.com/package/@tummycrypt/vite-plugin-a11y',
    website: 'https://github.com/tinyland-inc/tinyland.dev#readme',
  },
  source: {
    github: 'tinyland-inc/tinyland.dev',
    npm: '@tummycrypt/vite-plugin-a11y',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1533,
      weekly: 306,
    },
  },
})
