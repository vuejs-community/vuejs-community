import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@djie/unplugin-vue-inspector',
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
  source: {
    github: 'laihaojie/vite-plugin-vue-inspector',
    npm: '@djie/unplugin-vue-inspector',
  },
  links: {
    github: 'https://github.com/laihaojie/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/@djie/unplugin-vue-inspector',
    website: 'https://github.com/laihaojie/vite-plugin-vue-inspector#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 11,
    },
  },
})
