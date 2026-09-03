import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-whereami',
  description: 'Tints your favicon and prefixes the page title per environment (dev/staging/prod), plus an optional build-info banner in <head> and the browser console.',
  version: '0.4.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mastermakrela/whereami',
    npm: 'https://www.npmjs.com/package/vite-plugin-whereami',
  },
  stats: {
    downloads: {
      monthly: 657,
      weekly: 32,
    },
  },
})
