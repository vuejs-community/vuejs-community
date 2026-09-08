import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-codetofile',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  icon: 'logos:vite-icon',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'vue',
    'vite',
    'vscode',
    'vite-plugin',
    'inspector',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'webfansplz/vite-plugin-vue-inspector',
    npm: 'vite-plugin-codetofile',
  },
  links: {
    github: 'https://github.com/webfansplz/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/vite-plugin-codetofile',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
