import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@runtime-labs/composable-plugin',
  description: 'Vue Composable Observer plugin, devtools integration and unplugin transform.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'vue3',
    'composable',
    'composables',
    'devtools',
    'vue-devtools',
    'vite',
    'vite-plugin',
    'unplugin',
    'debugging',
    'observability',
    'state-tracking',
    'inspector',
    'dx',
  ],
  source: {
    github: 'runtime-labs/vue-composable-observer',
    npm: '@runtime-labs/composable-plugin',
  },
  links: {
    github: 'https://github.com/runtime-labs/vue-composable-observer',
    npm: 'https://www.npmjs.com/package/@runtime-labs/composable-plugin',
    website: 'https://github.com/runtime-labs/vue-composable-observer',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 25,
      weekly: 10,
    },
  },
})
