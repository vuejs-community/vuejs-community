import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@henrikvilhelmberglund/vite-plugin-monkey',
  description: 'A vite plugin server and build your.user.js for userscript engine like Tampermonkey and Violentmonkey and Greasemonkey',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/henrikvilhelmberglund/vite-plugin-monkey',
    npm: 'https://www.npmjs.com/package/@henrikvilhelmberglund/vite-plugin-monkey',
    website: 'https://github.com/henrikvilhelmberglund/vite-plugin-monkey#readme',
  },
  source: {
    github: 'henrikvilhelmberglund/vite-plugin-monkey',
    npm: '@henrikvilhelmberglund/vite-plugin-monkey',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
