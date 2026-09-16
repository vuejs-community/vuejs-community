import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-inspect',
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
  source: {
    github: 'webfansplz/vite-plugin-vue-inspect',
    npm: 'vite-plugin-vue-inspect',
  },
  links: {
    github: 'https://github.com/webfansplz/vite-plugin-vue-inspect',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-inspect',
    website: 'https://github.com/webfansplz/vite-plugin-vue-inspect#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
