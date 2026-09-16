import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-solid-with-excludes',
  description: 'solid-js integration plugin for vite 3',
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
    npm: 'vite-plugin-solid-with-excludes',
  },
  links: {
    github: 'https://github.com/solidjs/vite-plugin-solid',
    npm: 'https://www.npmjs.com/package/vite-plugin-solid-with-excludes',
    website: 'https://github.com/solidjs/vite-plugin-solid#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
