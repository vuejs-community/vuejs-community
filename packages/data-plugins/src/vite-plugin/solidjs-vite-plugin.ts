import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@solidjs/vite-plugin',
  description: 'solid-js integration plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite plugin',
    'vitejs',
    'vitejs plugin',
    'vite-plugin',
    'solid',
  ],
  source: {
    github: 'solidjs/solid-vite-plugin',
    npm: '@solidjs/vite-plugin',
  },
  links: {
    github: 'https://github.com/solidjs/solid-vite-plugin',
    npm: 'https://www.npmjs.com/package/@solidjs/vite-plugin',
    website: 'https://github.com/solidjs/solid-vite-plugin#readme',
  },
  stats: {
    stars: 520,
    downloads: {
      monthly: 121096,
      weekly: 36765,
    },
  },
})
