import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-critical-css',
  description: 'Vite plugin that extracts and inlines critical (above-the-fold) CSS into the <head> and defers the rest for improved LCP and Core Web Vitals.',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Effeilo/vite-plugin-critical-css',
    npm: 'vite-plugin-critical-css',
  },
  links: {
    github: 'https://github.com/Effeilo/vite-plugin-critical-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-critical-css',
  },
  stats: {
    downloads: {
      monthly: 303,
      weekly: 20,
    },
  },
})
