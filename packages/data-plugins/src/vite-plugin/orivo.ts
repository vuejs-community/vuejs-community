import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'orivo',
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
  source: {
    github: 'paul-browne/orivo',
    npm: 'orivo',
  },
  links: {
    github: 'https://github.com/paul-browne/orivo',
    npm: 'https://www.npmjs.com/package/orivo',
    website: 'https://github.com/paul-browne/orivo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
