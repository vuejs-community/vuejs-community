import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@monowind/vite',
  description: 'Zero-config Vite plugin for monowind — Tailwind included, no Tailwind setup required',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'monowind',
    'tailwind',
    'tui',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/benface/monowind',
    npm: 'https://www.npmjs.com/package/@monowind/vite',
  },
  stats: {
    downloads: {
      monthly: 566,
      weekly: 566,
    },
  },
})
