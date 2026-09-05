import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-twneat',
  description: 'Vite plugin that organizes Tailwind responsive prefixes into something neat and readable.',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'tailwind',
    'tailwindcss',
    'tailwind v4',
    'css',
    'responsive',
    'breakpoints',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jimydavis/vite-plugin-twneat',
    npm: 'https://www.npmjs.com/package/vite-plugin-twneat',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
