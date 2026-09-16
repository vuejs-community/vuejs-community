import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-mila',
  description: 'Vite plugin to copy and minify HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'compiler',
  ],
  source: {
    npm: 'vite-plugin-html-mila',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-html-mila',
    website: 'https://github.com/MilanovaSmile/vite-plugin-html-mila',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 129,
      weekly: 30,
    },
  },
})
