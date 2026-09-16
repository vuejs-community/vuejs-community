import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-multipage',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'html',
    'minify',
    'vite-plugin',
  ],
  source: {
    github: 'DraculaPrince/vite-plugin-html',
    npm: 'vite-plugin-html-multipage',
  },
  links: {
    github: 'https://github.com/DraculaPrince/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-multipage',
    website: 'https://github.com/DraculaPrince/vite-plugin-html/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
