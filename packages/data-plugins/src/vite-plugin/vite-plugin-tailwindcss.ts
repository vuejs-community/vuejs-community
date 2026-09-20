import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwindcss',
  description: 'Tailwind CSS in Vite with JIT by default',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tailwindcss',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cwaring/vite-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwindcss',
    website: 'https://github.com/cwaring/vite-plugin-tailwindcss#readme',
  },
  source: {
    github: 'cwaring/vite-plugin-tailwindcss',
    npm: 'vite-plugin-tailwindcss',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 461,
      weekly: 202,
    },
  },
})
