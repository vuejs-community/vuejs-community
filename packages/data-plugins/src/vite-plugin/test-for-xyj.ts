import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'test-for-xyj',
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
    npm: 'test-for-xyj',
  },
  links: {
    github: 'https://github.com/webfansplz/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/test-for-xyj',
    website: 'https://github.com/webfansplz/vite-plugin-vue-inspector#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
