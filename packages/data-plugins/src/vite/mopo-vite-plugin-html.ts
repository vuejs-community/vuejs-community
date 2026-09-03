import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mopo/vite-plugin-html',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'html',
    'minify',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@mopo/vite-plugin-html',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 4,
    },
  },
})
