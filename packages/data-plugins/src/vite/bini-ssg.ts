import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'bini-ssg',
  description: 'True SSG for Bini.js with zero code changes — pre-renders all routes to static HTML during vite build',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'bini',
    'bini-js',
    'vite',
    'vite-plugin',
    'ssg',
    'static-site-generator',
    'prerender',
    'seo',
    'react',
    'react-router',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Binidu01/bini-ssg',
    npm: 'https://www.npmjs.com/package/bini-ssg',
  },
  stats: {
    downloads: {
      monthly: 824,
      weekly: 193,
    },
  },
})
