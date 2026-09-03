import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@shaojc/vite-plugin-vue-inspector',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  version: '1.1.3',
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
    github: 'https://github.com/shaojingchao/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/@shaojc/vite-plugin-vue-inspector',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 5,
    },
  },
})
