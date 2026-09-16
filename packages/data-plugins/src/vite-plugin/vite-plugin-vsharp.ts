import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vsharp',
  description: 'A Vite plugin that compresses static images after each builds by using sharp.js',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sharp.js',
  ],
  source: {
    github: 'jw-12138/vite-plugin-vsharp',
    npm: 'vite-plugin-vsharp',
  },
  links: {
    github: 'https://github.com/jw-12138/vite-plugin-vsharp',
    npm: 'https://www.npmjs.com/package/vite-plugin-vsharp',
    website: 'https://github.com/jw-12138/vite-plugin-vsharp#readme',
  },
  stats: {
    stars: 55,
    downloads: {
      monthly: 5373,
      weekly: 1463,
    },
  },
})
