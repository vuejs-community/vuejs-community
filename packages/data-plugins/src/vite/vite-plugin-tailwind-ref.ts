import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-ref',
  description: 'A Vite plugin that automatically adds @reference directives to CSS files and framework style blocks (Svelte, Vue, etc.) using Tailwind CSS @apply',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tailwindcss',
    'tailwind',
    'css',
    'svelte',
    'vue',
    'reference',
    'apply',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/awaiden/vite-plugin-tailwind-ref',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind-ref',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 0,
    },
  },
})
