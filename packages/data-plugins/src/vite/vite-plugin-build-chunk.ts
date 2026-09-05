import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-chunk',
  description: 'Generate additional build artifacts (e.g., chunk files in different formats) after Vite\'s main build process. Ideal for scenarios requiring multi-format outputs or secondary builds.',
  version: '8.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-plugin-build-chunk',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-chunk',
  },
  stats: {
    downloads: {
      monthly: 330,
      weekly: 198,
    },
  },
})
