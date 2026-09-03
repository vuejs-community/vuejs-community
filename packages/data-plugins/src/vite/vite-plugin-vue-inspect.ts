import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-inspect',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  version: '3.6.0',
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
    github: 'https://github.com/webfansplz/vite-plugin-vue-inspect',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-inspect',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
