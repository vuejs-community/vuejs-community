import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@monowind/vite',
  description: 'Zero-config Vite plugin for monowind — Tailwind included, no Tailwind setup required',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'monowind',
    'tailwind',
    'tui',
    'vite-plugin',
  ],
  source: {
    github: 'benface/monowind',
    npm: '@monowind/vite',
  },
  links: {
    github: 'https://github.com/benface/monowind',
    npm: 'https://www.npmjs.com/package/@monowind/vite',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 3057,
      weekly: 699,
    },
  },
})
