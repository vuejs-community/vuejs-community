import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tw-auto-reference',
  description: 'Vite plugin that automatically inserts Tailwind CSS @reference directives in CSS files using @apply',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'auto-reference',
    'css',
    'tailwind',
    'tailwindcss',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/awaiden/vite-plugin-tw-auto-reference',
    npm: 'https://www.npmjs.com/package/vite-plugin-tw-auto-reference',
    website: 'https://github.com/awaiden/vite-plugin-tw-auto-reference#readme',
  },
  source: {
    github: 'awaiden/vite-plugin-tw-auto-reference',
    npm: 'vite-plugin-tw-auto-reference',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
