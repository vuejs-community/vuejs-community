import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-setup-name-support',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '0.1.0',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-setup-name-support',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 1,
    },
  },
})
