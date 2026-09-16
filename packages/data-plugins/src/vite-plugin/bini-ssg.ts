import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bini-ssg',
  description: 'True SSG for Bini.js with zero code changes — pre-renders all routes to static HTML during vite build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Binidu01/bini-ssg',
    npm: 'bini-ssg',
  },
  links: {
    github: 'https://github.com/Binidu01/bini-ssg',
    npm: 'https://www.npmjs.com/package/bini-ssg',
    website: 'https://github.com/Binidu01/bini-ssg#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 862,
      weekly: 33,
    },
  },
})
