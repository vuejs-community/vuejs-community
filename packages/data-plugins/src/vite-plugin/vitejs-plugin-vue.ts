import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-vue',
  description: 'The official plugin for Vue SFC support in Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
  ],
  links: {
    github: 'https://github.com/vitejs/vite-plugin-vue',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-vue',
    website: 'https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme',
  },
  source: {
    github: 'vitejs/vite-plugin-vue',
    npm: '@vitejs/plugin-vue',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33882607,
      weekly: 6621618,
    },
  },
})
