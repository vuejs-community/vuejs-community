import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-easy',
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
  links: {
    github: 'https://github.com/TengChongChong/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-easy',
    website: 'https://github.com/TengChongChong/vite-plugin-html/tree/master/#readme',
  },
  source: {
    github: 'TengChongChong/vite-plugin-html',
    npm: 'vite-plugin-html-easy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
