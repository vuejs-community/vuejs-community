import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@op_chen/vite-plugin-vue-inspector',
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
    github: 'https://github.com/DBSDs/vite-plugin-vue-inspector',
    npm: 'https://www.npmjs.com/package/@op_chen/vite-plugin-vue-inspector',
    website: 'https://github.com/DBSDs/vite-plugin-vue-inspector#readme',
  },
  source: {
    github: 'DBSDs/vite-plugin-vue-inspector',
    npm: '@op_chen/vite-plugin-vue-inspector',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
