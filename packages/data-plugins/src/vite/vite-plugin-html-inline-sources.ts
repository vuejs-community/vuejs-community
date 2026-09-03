import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-inline-sources',
  description: 'Vite plugin for inlining JS, CSS and SVG into index.html with a declarative vite-inline attribute',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'javascript',
    'css',
    'svg',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/eighty4/vite-plugin-html-inline-sources',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-inline-sources',
  },
  stats: {
    downloads: {
      monthly: 521,
      weekly: 125,
    },
  },
})
