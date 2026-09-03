import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-tailwind-auto-reference',
  description: 'A Vite plugin that automatically adds @reference directives to Svelte component style blocks for Tailwind CSS @apply support',
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
  links: {
    github: 'https://github.com/awaiden/vite-plugin-svelte-tailwind-auto-reference',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-tailwind-auto-reference',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 5,
    },
  },
})
