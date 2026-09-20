import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-pulse',
  description: 'Dev-only Vite plugin that visualizes Vue reactivity (ref/reactive/computed/watch/watchEffect) as a live, glowing dependency graph — declarations are nodes, components are boundaries/filter tags; static map + runtime traffic.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'vite-plugin',
    'reactivity',
    'devtool',
    'graph',
    'visualization',
  ],
  links: {
    github: 'https://github.com/Hal-Spidernight/vite-plugin-vue-pulse',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-pulse',
    website: 'https://github.com/Hal-Spidernight/vite-plugin-vue-pulse#readme',
  },
  source: {
    github: 'Hal-Spidernight/vite-plugin-vue-pulse',
    npm: 'vite-plugin-vue-pulse',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
