import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-meta',
  description: 'Generate meta tags to html files according to configuration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'head',
    'meta',
    'generate',
    'csp',
  ],
  source: {
    github: 'RJQingHuan/vite-plugin-html-meta',
    npm: 'vite-plugin-html-meta',
  },
  links: {
    github: 'https://github.com/RJQingHuan/vite-plugin-html-meta',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-meta',
    website: 'https://github.com/RJQingHuan/vite-plugin-html-meta#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 65,
      weekly: 5,
    },
  },
})
