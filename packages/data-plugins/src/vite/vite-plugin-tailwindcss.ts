import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwindcss',
  description: 'Tailwind CSS in Vite with JIT by default',
  version: '0.0.0-0',
  category: 'plugin',
  tags: [
    'tailwindcss',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cwaring/vite-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwindcss',
  },
  stats: {
    downloads: {
      monthly: 350,
      weekly: 88,
    },
  },
})
