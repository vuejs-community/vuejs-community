import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-inspect',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'vue',
    'vite',
    'vscode',
    'unplugin',
    'inspector',
    'debug',
  ],
  links: {
    github: 'https://github.com/webfansplz/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/unplugin-vue-inspect',
    website: 'https://github.com/webfansplz/vite-plugin-vue-inspector#readme',
  },
  source: {
    github: 'webfansplz/vite-plugin-vue-inspector',
    npm: 'unplugin-vue-inspect',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
