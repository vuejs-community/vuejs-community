import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vue-shaker',
  description: 'Source-level tree-shaker for Vue 3 SFCs — removes unreachable v-if branches and scoped CSS rules a bundler can\'t see',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'dead-code-elimination',
    'defineProps',
    'optimization',
    'rollup-plugin',
    'sfc',
    'tree-shaker',
    'tree-shaking',
    'vite-plugin',
    'vue',
    'vue3',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/baseballyama/vue-shaker',
    npm: 'https://www.npmjs.com/package/vue-shaker',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
