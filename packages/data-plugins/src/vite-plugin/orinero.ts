import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'orinero',
  description: 'Minimal static site generation (SSG) for Vite using JavaScript functions that return HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/paul-browne/vite-plugin-html-pages',
    npm: 'https://www.npmjs.com/package/orinero',
    website: 'https://github.com/paul-browne/vite-plugin-html-pages',
  },
  source: {
    github: 'paul-browne/vite-plugin-html-pages',
    npm: 'orinero',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
