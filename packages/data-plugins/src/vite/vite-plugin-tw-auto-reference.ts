import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tw-auto-reference',
  description: 'Vite plugin that automatically inserts Tailwind CSS @reference directives in CSS files using @apply',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'auto-reference',
    'css',
    'tailwind',
    'tailwindcss',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/awaiden/vite-plugin-tw-auto-reference',
    npm: 'https://www.npmjs.com/package/vite-plugin-tw-auto-reference',
  },
  stats: {
    downloads: {
      monthly: 150,
      weekly: 2,
    },
  },
})
