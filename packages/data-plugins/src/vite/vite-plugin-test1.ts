import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-test1',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  version: '1.0.3',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-test1',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
