import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-latte',
  description: 'Vite plugin for Latte, transforms latte templates via php into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'latte',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'lubomirblazekcz/vite-plugin-latte',
    npm: '@vituum/vite-plugin-latte',
  },
  links: {
    github: 'https://github.com/lubomirblazekcz/vite-plugin-latte',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-latte',
    website: 'https://github.com/lubomirblazekcz/vite-plugin-latte#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 720,
      weekly: 204,
    },
  },
})
