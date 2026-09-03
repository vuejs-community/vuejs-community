import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'dom-inspect',
  description: 'Point at any DOM element in the browser and get the source file and line number',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react',
    'source',
    'devtools',
    'babel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/dom-inspect',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
