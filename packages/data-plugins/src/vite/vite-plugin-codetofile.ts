import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-codetofile',
  description: 'jump to local IDE source code while click the element of browser automatically.',
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
