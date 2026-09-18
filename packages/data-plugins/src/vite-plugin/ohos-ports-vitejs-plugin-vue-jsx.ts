import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ohos-ports/vitejs-plugin-vue-jsx',
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
    github: 'ohos-ports/ohos-ports',
    npm: '@ohos-ports/vitejs-plugin-vue-jsx',
  },
  links: {
    github: 'https://github.com/ohos-ports/ohos-ports',
    npm: 'https://www.npmjs.com/package/@ohos-ports/vitejs-plugin-vue-jsx',
    website: 'https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx#readme',
  },
})
