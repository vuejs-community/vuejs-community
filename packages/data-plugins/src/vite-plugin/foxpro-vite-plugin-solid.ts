import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@foxpro/vite-plugin-solid',
  description: 'solid-js integration plugin for vite 3/4',
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
    github: 'solidjs/vite-plugin-solid',
    npm: '@foxpro/vite-plugin-solid',
  },
  links: {
    github: 'https://github.com/solidjs/vite-plugin-solid',
    npm: 'https://www.npmjs.com/package/@foxpro/vite-plugin-solid',
    website: 'https://github.com/solidjs/vite-plugin-solid#readme',
  },
  stats: {
    stars: 520,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
