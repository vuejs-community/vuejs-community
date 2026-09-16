import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'my-vite-plugin-vue-inspector',
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
    npm: 'my-vite-plugin-vue-inspector',
  },
  links: {
    github: 'https://github.com/webfansplz/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/my-vite-plugin-vue-inspector',
    website: 'https://github.com/webfansplz/vite-plugin-vue-inspector#readme',
  },
  stats: {
    stars: 807,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
