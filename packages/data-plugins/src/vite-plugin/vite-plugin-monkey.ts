import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-monkey',
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
  source: {
    github: 'lisonge/vite-plugin-monkey',
    npm: 'vite-plugin-monkey',
  },
  links: {
    github: 'https://github.com/lisonge/vite-plugin-monkey',
    npm: 'https://www.npmjs.com/package/vite-plugin-monkey',
    website: 'https://github.com/lisonge/vite-plugin-monkey#readme',
  },
  stats: {
    stars: 2035,
    downloads: {
      monthly: 15243,
      weekly: 3145,
    },
  },
})
