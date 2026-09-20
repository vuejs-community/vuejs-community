import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-astro-prerender',
  description: 'A Vite plugin for Astro that prerenders components to static HTML and generates optimized CSS with Tailwind tree-shaking for lazy-loading below-the-fold content',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/ishaanparlikar/vite-plugin-astro-prerender',
    npm: 'https://www.npmjs.com/package/vite-plugin-astro-prerender',
    website: 'https://ishaanparlikar.github.io/astro-lazy-plugin-demo',
  },
  source: {
    github: 'ishaanparlikar/vite-plugin-astro-prerender',
    npm: 'vite-plugin-astro-prerender',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 37,
      weekly: 7,
    },
  },
})
