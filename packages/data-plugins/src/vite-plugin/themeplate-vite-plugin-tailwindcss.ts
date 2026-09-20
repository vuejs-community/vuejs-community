import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@themeplate/vite-plugin-tailwindcss',
  description: 'Vite plugin for generating theme.json entries from TailwindCSS config file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tailwindcss',
    'wordpress',
    'themeplate',
  ],
  links: {
    github: 'https://github.com/ThemePlate/vite-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/@themeplate/vite-plugin-tailwindcss',
    website: 'https://github.com/ThemePlate/vite-plugin-tailwindcss#readme',
  },
  source: {
    github: 'ThemePlate/vite-plugin-tailwindcss',
    npm: '@themeplate/vite-plugin-tailwindcss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
