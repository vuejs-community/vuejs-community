import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@orca-studio/vite-plugin-html',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '3.2.1',
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
    github: 'https://github.com/vbenjs/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/@orca-studio/vite-plugin-html',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 9,
    },
  },
})
