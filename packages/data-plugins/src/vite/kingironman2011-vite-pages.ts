import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kingironman2011/vite-pages',
  description: 'Vite plugin that auto-generates HTML files for every react-router-dom route so refreshing on a sub-page never 404s (great for GitHub Pages, Netlify, Vercel static, etc.)',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react-router',
    'react-router-dom',
    'spa',
    'github-pages',
    'static',
    '404',
    'html-generation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/KingIronMan2011/vite-pages',
    npm: 'https://www.npmjs.com/package/@kingironman2011/vite-pages',
  },
  stats: {
    downloads: {
      monthly: 74,
      weekly: 14,
    },
  },
})
