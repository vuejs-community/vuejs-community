import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-include-css',
  description: 'Bundles all CSS into a single JavaScript file when `cssCodeSplit: false` is enabled.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-include-css',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-include-css',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-include-css',
    website: 'https://fengxinming.github.io/vite-plugins/plugins/vite-plugin-include-css/quick-start',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 354,
      weekly: 3,
    },
  },
})
