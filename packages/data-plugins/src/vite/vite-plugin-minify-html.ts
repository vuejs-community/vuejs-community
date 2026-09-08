import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minify-html',
  description: 'Minify HTML files.',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'minify-html',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Marinerer/vite-plugins',
    npm: 'vite-plugin-minify-html',
  },
  links: {
    github: 'https://github.com/Marinerer/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-minify-html',
  },
  stats: {
    downloads: {
      monthly: 1082,
      weekly: 270,
    },
  },
})
