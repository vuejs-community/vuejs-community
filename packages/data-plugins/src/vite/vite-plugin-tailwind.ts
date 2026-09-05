import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind',
  description: 'vite tailwind plugin with jit compiler enabled',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tailwind',
    'tailwind-jit',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/axe-me/vite-plugin-tailwind',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind',
  },
  stats: {
    downloads: {
      monthly: 404,
      weekly: 137,
    },
  },
})
