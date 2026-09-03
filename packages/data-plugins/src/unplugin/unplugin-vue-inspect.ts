import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-inspect',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  version: '0.2.5',
  category: 'plugin',
  tags: [
    'vue',
    'vite',
    'vscode',
    'unplugin',
    'inspector',
    'debug',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/webfansplz/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/unplugin-vue-inspect',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
