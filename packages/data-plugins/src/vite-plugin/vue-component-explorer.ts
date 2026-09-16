import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-component-explorer',
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
    github: 'martinszeltins/vite-plugin-vue-inspector',
    npm: 'vue-component-explorer',
  },
  links: {
    github: 'https://github.com/martinszeltins/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/vue-component-explorer',
    website: 'https://github.com/martinszeltins/vite-plugin-vue-inspector',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
