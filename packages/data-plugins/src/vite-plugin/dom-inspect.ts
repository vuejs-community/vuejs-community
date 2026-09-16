import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'dom-inspect',
  description: 'Point at any DOM element in the browser and get the source file and line number',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'source',
    'devtools',
    'babel',
  ],
  source: {
    npm: 'dom-inspect',
  },
  links: {
    npm: 'https://www.npmjs.com/package/dom-inspect',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
