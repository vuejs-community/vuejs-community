import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-vue-jsx',
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
  source: {
    github: 'vitejs/vite-plugin-vue',
    npm: '@vitejs/plugin-vue-jsx',
  },
  links: {
    github: 'https://github.com/vitejs/vite-plugin-vue',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-vue-jsx',
    website: 'https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8965860,
      weekly: 1853577,
    },
  },
})
