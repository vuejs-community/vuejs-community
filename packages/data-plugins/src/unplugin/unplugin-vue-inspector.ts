import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-inspector',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  icon: 'icon:dark-unplugin',
  version: '3.0.0',
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
  source: {
    github: 'webfansplz/vite-plugin-vue-inspector',
    npm: 'unplugin-vue-inspector',
  },
  links: {
    github: 'https://github.com/webfansplz/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/unplugin-vue-inspector',
  },
  stats: {
    downloads: {
      monthly: 7687,
      weekly: 2134,
    },
  },
})
