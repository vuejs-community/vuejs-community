import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vue-component-explorer',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  version: '1.2.0',
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
    github: 'https://github.com/martinszeltins/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/vue-component-explorer',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
