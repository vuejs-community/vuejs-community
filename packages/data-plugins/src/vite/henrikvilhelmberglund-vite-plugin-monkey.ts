import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@henrikvilhelmberglund/vite-plugin-monkey',
  description: 'A vite plugin server and build your.user.js for userscript engine like Tampermonkey and Violentmonkey and Greasemonkey',
  version: '4.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'monkey',
    'Tampermonkey',
    'Violentmonkey',
    'Greasemonkey',
    'userscript',
    'greasyfork',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/henrikvilhelmberglund/vite-plugin-monkey',
    npm: 'https://www.npmjs.com/package/@henrikvilhelmberglund/vite-plugin-monkey',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 9,
    },
  },
})
