import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@deepmetier/vitejs-plugin-vue',
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
    npm: 'https://www.npmjs.com/package/@deepmetier/vitejs-plugin-vue',
    website: 'https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme',
  },
  source: {
    github: 'vitejs/vite-plugin-vue',
    npm: '@deepmetier/vitejs-plugin-vue',
  },
})
