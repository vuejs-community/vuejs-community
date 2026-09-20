import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@preact/preset-vite',
  description: 'Preact preset for the vite bundler',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'preact',
    'vite',
    'vite-plugin',
    'vite-preset',
    'preset',
  ],
  links: {
    github: 'https://github.com/preactjs/preset-vite',
    npm: 'https://www.npmjs.com/package/@preact/preset-vite',
    website: 'https://github.com/preactjs/preset-vite#readme',
  },
  source: {
    github: 'preactjs/preset-vite',
    npm: '@preact/preset-vite',
  },
  stats: {
    stars: 308,
    downloads: {
      monthly: 2095649,
      weekly: 437976,
    },
  },
})
