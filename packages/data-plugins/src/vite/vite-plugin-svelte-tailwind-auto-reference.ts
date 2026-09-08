import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-tailwind-auto-reference',
  description: 'A Vite plugin that automatically adds @reference directives to Svelte component style blocks for Tailwind CSS @apply support',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'tailwindcss',
    'tailwind',
    'css',
    'reference',
    'apply',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'awaiden/vite-plugin-svelte-tailwind-auto-reference',
    npm: 'vite-plugin-svelte-tailwind-auto-reference',
  },
  links: {
    github: 'https://github.com/awaiden/vite-plugin-svelte-tailwind-auto-reference',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-tailwind-auto-reference',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 9,
    },
  },
})
