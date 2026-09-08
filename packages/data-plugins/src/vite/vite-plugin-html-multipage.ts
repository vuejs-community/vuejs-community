import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-multipage',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  icon: 'logos:vite-icon',
  version: '1.0.2',
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
  source: {
    github: 'DraculaPrince/vite-plugin-html',
    npm: 'vite-plugin-html-multipage',
  },
  links: {
    github: 'https://github.com/DraculaPrince/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-multipage',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
