import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ppm',
  description: 'A Vite plugin for handling `.ppm` files in your projects. This plugin leverages `ppm-parser` to parse `.ppm` files and seamlessly integrates them into your Vite-based projects.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ppm',
    'typescript',
  ],
  source: {
    github: 'jackashton/vite-plugin-ppm',
    npm: 'vite-plugin-ppm',
  },
  links: {
    github: 'https://github.com/jackashton/vite-plugin-ppm',
    npm: 'https://www.npmjs.com/package/vite-plugin-ppm',
    website: 'https://github.com/jackashton/vite-plugin-ppm#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
