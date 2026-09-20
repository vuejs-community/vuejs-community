import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@honeyjs/vite-loader',
  description: 'A vite plugin to load various files, like png, svg, etc. As native html elements, or h functions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svg',
    'components',
  ],
  links: {
    github: 'https://github.com/CodeFoxDev/honeyjs-vite-loader',
    npm: 'https://www.npmjs.com/package/@honeyjs/vite-loader',
    website: 'https://github.com/codefoxdev/honeyjs-vite-loader#readme',
  },
  source: {
    github: 'CodeFoxDev/honeyjs-vite-loader',
    npm: '@honeyjs/vite-loader',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
