import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-astro-prerender',
  description: 'A Vite plugin for Astro that prerenders components to static HTML and generates optimized CSS with Tailwind tree-shaking for lazy-loading below-the-fold content',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'astro',
    'astro-integration',
    'prerender',
    'static-html',
    'lazy-loading',
    'lazy-load',
    'performance',
    'optimization',
    'tailwind',
    'tailwindcss',
    'css',
    'tree-shaking',
    'ssr',
    'ssg',
    'components',
    'html-fragments',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ishaanparlikar/vite-plugin-astro-prerender',
    npm: 'https://www.npmjs.com/package/vite-plugin-astro-prerender',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 6,
    },
  },
})
