import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ppm',
  description: 'A Vite plugin for handling `.ppm` files in your projects. This plugin leverages `ppm-parser` to parse `.ppm` files and seamlessly integrates them into your Vite-based projects.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ppm',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jackashton/vite-plugin-ppm',
    npm: 'https://www.npmjs.com/package/vite-plugin-ppm',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
