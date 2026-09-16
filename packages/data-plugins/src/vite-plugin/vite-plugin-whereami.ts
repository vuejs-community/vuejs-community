import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-whereami',
  description: 'Tints your favicon and prefixes the page title per environment (dev/staging/prod), plus an optional build-info banner in <head> and the browser console.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'banner',
    'dev',
    'environment',
    'favicon',
    'staging',
    'title',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'mastermakrela/whereami',
    npm: 'vite-plugin-whereami',
  },
  links: {
    github: 'https://github.com/mastermakrela/whereami',
    npm: 'https://www.npmjs.com/package/vite-plugin-whereami',
    website: 'https://github.com/mastermakrela/whereami#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 226,
      weekly: 49,
    },
  },
})
