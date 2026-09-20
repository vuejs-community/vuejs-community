import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@djie/vite-plugin-vue-inspector',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'vite',
    'vscode',
    'vite-plugin',
    'inspector',
    'debug',
  ],
  links: {
    github: 'https://github.com/laihaojie/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/@djie/vite-plugin-vue-inspector',
    website: 'https://github.com/laihaojie/vite-plugin-vue-inspector#readme',
  },
  source: {
    github: 'laihaojie/vite-plugin-vue-inspector',
    npm: '@djie/vite-plugin-vue-inspector',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 39,
      weekly: 12,
    },
  },
})
