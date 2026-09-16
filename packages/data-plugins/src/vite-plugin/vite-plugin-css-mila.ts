import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-mila',
  description: 'Vite plugin to minify CSS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'compiler',
  ],
  source: {
    npm: 'vite-plugin-css-mila',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-css-mila',
    website: 'https://github.com/MilanovaSmile/vite-plugin-css-mila',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 140,
      weekly: 29,
    },
  },
})
