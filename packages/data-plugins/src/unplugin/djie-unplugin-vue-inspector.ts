import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@djie/unplugin-vue-inspector',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  version: '5.0.2',
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
    github: 'https://github.com/laihaojie/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/@djie/unplugin-vue-inspector',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 8,
    },
  },
})
