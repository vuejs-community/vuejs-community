import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minify-html',
  description: 'Minify HTML files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'minify-html',
    'vite-plugin',
  ],
  source: {
    github: 'Marinerer/vite-plugins',
    npm: 'vite-plugin-minify-html',
  },
  links: {
    github: 'https://github.com/Marinerer/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-minify-html',
    website: 'https://github.com/Marinerer/vite-plugins',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 1082,
      weekly: 365,
    },
  },
})
