import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-inject',
  description: 'Split your index.html into multiple files and inject them where ever you want!',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'load html',
    'split html',
    'inject html',
    'html',
    'html-loader',
    'loader',
  ],
  links: {
    github: 'https://github.com/donnikitos/vite-plugin-html-inject',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-inject',
    website: 'https://github.com/donnikitos/vite-plugin-html-inject#readme',
  },
  source: {
    github: 'donnikitos/vite-plugin-html-inject',
    npm: 'vite-plugin-html-inject',
  },
  stats: {
    stars: 88,
    downloads: {
      monthly: 32723,
      weekly: 5938,
    },
  },
})
