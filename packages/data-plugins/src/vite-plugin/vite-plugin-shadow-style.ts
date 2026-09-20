import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shadow-style',
  description: 'A vite plugin to inject css into web components\' shadow dom',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'webcomponents',
    'css',
    'style',
    'shadow-dom',
  ],
  links: {
    github: 'https://github.com/hood/vite-plugin-shadow-style',
    npm: 'https://www.npmjs.com/package/vite-plugin-shadow-style',
    website: 'https://github.com/hood/vite-plugin-shadow-style#readme',
  },
  source: {
    github: 'hood/vite-plugin-shadow-style',
    npm: 'vite-plugin-shadow-style',
  },
  stats: {
    stars: 27,
    downloads: {
      monthly: 5851,
      weekly: 1443,
    },
  },
})
