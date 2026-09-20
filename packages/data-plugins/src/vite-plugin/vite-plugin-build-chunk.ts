import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-chunk',
  description: 'Generate additional build artifacts (e.g., chunk files in different formats) after Vite\'s main build process. Ideal for scenarios requiring multi-format outputs or secondary builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-build-chunk',
  ],
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-chunk',
    website: 'https://fengxinming.github.io/vite-plugins/plugins/vite-plugin-build-chunk/quick-start',
  },
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-build-chunk',
  },
  stats: {
    stars: 101,
    downloads: {
      monthly: 371,
      weekly: 17,
    },
  },
})
