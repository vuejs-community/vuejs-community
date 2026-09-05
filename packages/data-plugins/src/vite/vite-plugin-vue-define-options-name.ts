import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-define-options-name',
  description: 'A Vite plugin that injects/fills defineOptions({ name }) for Vue SFC <script setup> based on the file path.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'component-name',
    'defineOptions',
    'script-setup',
    'sfc',
    'vite-plugin',
    'vue',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yingzhi0808/vite-plugin-vue-define-options-name',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-define-options-name',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
