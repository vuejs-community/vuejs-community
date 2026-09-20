import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-critical-css',
  description: 'Vite plugin that extracts and inlines critical (above-the-fold) CSS into the <head> and defers the rest for improved LCP and Core Web Vitals.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'critical-css',
    'critical',
    'above-the-fold',
    'performance',
    'lcp',
    'core-web-vitals',
    'css',
    'inline',
    'defer',
  ],
  links: {
    github: 'https://github.com/Effeilo/vite-plugin-critical-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-critical-css',
    website: 'https://github.com/Effeilo/vite-plugin-critical-css',
  },
  source: {
    github: 'Effeilo/vite-plugin-critical-css',
    npm: 'vite-plugin-critical-css',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 157,
      weekly: 30,
    },
  },
})
