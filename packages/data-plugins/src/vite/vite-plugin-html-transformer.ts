import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-transformer',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '4.0.0',
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
    github: 'https://github.com/bennyxguo/vite-plugin-html-transformer',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-transformer',
  },
  stats: {
    downloads: {
      monthly: 90,
      weekly: 23,
    },
  },
})
