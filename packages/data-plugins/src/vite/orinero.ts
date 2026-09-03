import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'orinero',
  description: 'Minimal static site generation (SSG) for Vite using JavaScript functions that return HTML',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-pages',
    'vite-ssg',
    'static-site-generator',
    'ssg',
    'file-based-routing',
    'html-generator',
    'javascript-to-html',
    'static-html',
    'blog-generator',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/paul-browne/vite-plugin-html-pages',
    npm: 'https://www.npmjs.com/package/orinero',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 7,
    },
  },
})
