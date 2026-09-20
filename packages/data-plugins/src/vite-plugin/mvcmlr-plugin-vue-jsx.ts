import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mvcmlr/plugin-vue-jsx',
  description: 'Provides Vue 3 JSX & TSX support with HMR.',
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
    npm: 'https://www.npmjs.com/package/@mvcmlr/plugin-vue-jsx',
    website: 'https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx#readme',
  },
  source: {
    github: 'vitejs/vite-plugin-vue',
    npm: '@mvcmlr/plugin-vue-jsx',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
