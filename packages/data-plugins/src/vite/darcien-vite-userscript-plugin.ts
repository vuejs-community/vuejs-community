import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@darcien/vite-userscript-plugin',
  version: '1.10.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'userscript',
    'tampermonkey',
    'greasemonkey',
    'violentmonkey',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/crashmax-dev/vite-userscript-plugin',
    npm: 'https://www.npmjs.com/package/@darcien/vite-userscript-plugin',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
