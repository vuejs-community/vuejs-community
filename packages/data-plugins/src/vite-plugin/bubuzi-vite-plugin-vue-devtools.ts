import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bubuzi/vite-plugin-vue-devtools',
  description: 'A vite plugin for Vue DevTools (fork by bubuzi)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue-devtools',
    'vite-plugin',
    'vite-plugin-vue-devtools',
    'dx',
  ],
  links: {
    github: 'https://github.com/ybubuzi/vue-devtools-ai',
    npm: 'https://www.npmjs.com/package/@bubuzi/vite-plugin-vue-devtools',
    website: 'https://github.com/ybubuzi/vue-devtools-ai#readme',
  },
  source: {
    github: 'ybubuzi/vue-devtools-ai',
    npm: '@bubuzi/vite-plugin-vue-devtools',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
