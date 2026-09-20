import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-ref',
  description: 'A Vite plugin that automatically adds @reference directives to CSS files and framework style blocks (Svelte, Vue, etc.) using Tailwind CSS @apply',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/awaiden/vite-plugin-tailwind-ref',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind-ref',
    website: 'https://github.com/awaiden/vite-plugin-tailwind-ref#readme',
  },
  source: {
    github: 'awaiden/vite-plugin-tailwind-ref',
    npm: 'vite-plugin-tailwind-ref',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
