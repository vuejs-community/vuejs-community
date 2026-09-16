import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@shaojc/vite-plugin-vue-inspector',
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
    github: 'shaojingchao/vite-plugin-vue-inspector',
    npm: '@shaojc/vite-plugin-vue-inspector',
  },
  links: {
    github: 'https://github.com/shaojingchao/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/@shaojc/vite-plugin-vue-inspector',
    website: 'https://github.com/shaojingchao/vite-plugin-vue-inspector#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 15,
    },
  },
})
