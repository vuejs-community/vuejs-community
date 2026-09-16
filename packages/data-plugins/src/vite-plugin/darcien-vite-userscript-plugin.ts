import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@darcien/vite-userscript-plugin',
  description: '',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'userscript',
    'tampermonkey',
    'greasemonkey',
    'violentmonkey',
  ],
  source: {
    github: 'crashmax-dev/vite-userscript-plugin',
    npm: '@darcien/vite-userscript-plugin',
  },
  links: {
    github: 'https://github.com/crashmax-dev/vite-userscript-plugin',
    npm: 'https://www.npmjs.com/package/@darcien/vite-userscript-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
