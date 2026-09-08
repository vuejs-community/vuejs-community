import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-inspect',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'webfansplz/vite-plugin-vue-inspector',
    npm: 'unplugin-vue-inspect',
  },
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
