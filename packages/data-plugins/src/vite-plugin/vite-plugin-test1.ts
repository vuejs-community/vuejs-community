import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-test1',
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
    github: 'webfansplz/vite-plugin-vue-inspector',
    npm: 'vite-plugin-test1',
  },
  links: {
    github: 'https://github.com/webfansplz/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/vite-plugin-test1',
    website: 'https://github.com/webfansplz/vite-plugin-vue-inspector#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
