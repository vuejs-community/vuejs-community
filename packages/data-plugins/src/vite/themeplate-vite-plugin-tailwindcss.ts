import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@themeplate/vite-plugin-tailwindcss',
  description: 'Vite plugin for generating theme.json entries from TailwindCSS config file.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tailwindcss',
    'wordpress',
    'themeplate',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ThemePlate/vite-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/@themeplate/vite-plugin-tailwindcss',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
