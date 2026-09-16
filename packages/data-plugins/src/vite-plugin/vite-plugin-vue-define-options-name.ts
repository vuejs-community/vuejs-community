import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-define-options-name',
  description: 'A Vite plugin that injects/fills defineOptions({ name }) for Vue SFC <script setup> based on the file path.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'component-name',
    'defineOptions',
    'script-setup',
    'sfc',
    'vite-plugin',
    'vue',
  ],
  source: {
    github: 'yingzhi0808/vite-plugin-vue-define-options-name',
    npm: 'vite-plugin-vue-define-options-name',
  },
  links: {
    github: 'https://github.com/yingzhi0808/vite-plugin-vue-define-options-name',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-define-options-name',
    website: 'https://github.com/yingzhi0808/vite-plugin-vue-define-options-name',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
