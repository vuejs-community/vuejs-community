import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-shaker',
  description: 'Source-level tree-shaker for Vue 3 SFCs — removes unreachable v-if branches and scoped CSS rules a bundler can\'t see',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/baseballyama/vue-shaker',
    npm: 'https://www.npmjs.com/package/vue-shaker',
    website: 'https://github.com/baseballyama/vue-shaker#readme',
  },
  source: {
    github: 'baseballyama/vue-shaker',
    npm: 'vue-shaker',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 33,
      weekly: 9,
    },
  },
})
