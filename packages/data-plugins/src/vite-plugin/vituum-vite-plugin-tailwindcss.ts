import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-tailwindcss',
  description: 'Vite plugin for TailwindCSS v3, adds out of the box support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tailwindcss',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vituum/vite-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-tailwindcss',
    website: 'https://github.com/vituum/vite-plugin-tailwindcss#readme',
  },
  source: {
    github: 'vituum/vite-plugin-tailwindcss',
    npm: '@vituum/vite-plugin-tailwindcss',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 958,
      weekly: 275,
    },
  },
})
