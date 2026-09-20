import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ryomahan-vite-plugin-html',
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
    github: 'https://github.com/ryomahan/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/ryomahan-vite-plugin-html',
    website: 'https://github.com/ryomahan/vite-plugin-html/tree/master/#readme',
  },
  source: {
    github: 'ryomahan/vite-plugin-html',
    npm: 'ryomahan-vite-plugin-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
