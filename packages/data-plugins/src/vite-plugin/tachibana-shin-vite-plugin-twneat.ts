import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tachibana-shin/vite-plugin-twneat',
  description: 'Vite plugin that organizes Tailwind responsive prefixes into something neat and readable.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'tailwind',
    'tailwindcss',
    'tailwind v4',
    'css',
    'responsive',
    'breakpoints',
  ],
  source: {
    github: 'jimydavis/vite-plugin-twneat',
    npm: '@tachibana-shin/vite-plugin-twneat',
  },
  links: {
    github: 'https://github.com/jimydavis/vite-plugin-twneat',
    npm: 'https://www.npmjs.com/package/@tachibana-shin/vite-plugin-twneat',
    website: 'https://github.com/jimydavis/vite-plugin-twneat#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
