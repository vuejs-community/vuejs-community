import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwindcss',
  description: 'Tailwind CSS in Vite with JIT by default',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'cwaring/vite-plugin-tailwindcss',
    npm: 'vite-plugin-tailwindcss',
  },
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
