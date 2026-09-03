import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-pulse',
  description: 'Dev-only Vite plugin that visualizes Vue reactivity (ref/reactive/computed/watch/watchEffect) as a live, glowing dependency graph — declarations are nodes, components are boundaries/filter tags; static map + runtime traffic.',
  version: '0.3.5',
  category: 'plugin',
  tags: [
    'vue',
    'vite-plugin',
    'reactivity',
    'devtool',
    'graph',
    'visualization',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Hal-Spidernight/vite-plugin-vue-pulse',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-pulse',
  },
  stats: {
    downloads: {
      monthly: 69,
      weekly: 2,
    },
  },
})
