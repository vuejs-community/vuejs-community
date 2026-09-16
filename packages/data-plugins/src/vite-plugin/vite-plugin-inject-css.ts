import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inject-css',
  description: 'Vite plugin that crawls the application and injects the CSS using JS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'typescript',
    'css',
    'js',
  ],
  source: {
    npm: 'vite-plugin-inject-css',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-inject-css',
    website: 'https://gitlab.com/Ori6033/vite-plugin-inject-css#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 100,
      weekly: 25,
    },
  },
})
