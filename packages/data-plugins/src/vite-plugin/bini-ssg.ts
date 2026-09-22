import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bini-ssg',
  description: 'True SSG for Bini.js with zero code changes — auto-discovers dynamic routes and pre-renders them to static HTML during vite build',
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
    'auto-crawl',
    'dynamic-routes',
  ],
  links: {
    github: 'https://github.com/Binidu01/bini-ssg',
    npm: 'https://www.npmjs.com/package/bini-ssg',
    website: 'https://bini.js.org',
  },
  source: {
    github: 'Binidu01/bini-ssg',
    npm: 'bini-ssg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 862,
      weekly: 33,
    },
  },
})
