import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-monkey',
  description: 'A vite plugin server and build your.user.js for userscript engine like Tampermonkey and Violentmonkey and Greasemonkey',
  version: '8.1.1',
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
    github: 'https://github.com/lisonge/vite-plugin-monkey',
    npm: 'https://www.npmjs.com/package/vite-plugin-monkey',
  },
  stats: {
    downloads: {
      monthly: 20134,
      weekly: 4155,
    },
  },
})
