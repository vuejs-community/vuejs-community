import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preload-prefetch',
  description: 'Vite plugin to preload and/or prefetch resources that match a regular expression.',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup',
    'preload',
    'prefetch',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kevinfarrugia/vite-plugin-preload-prefetch',
    npm: 'vite-plugin-preload-prefetch',
  },
  links: {
    github: 'https://github.com/kevinfarrugia/vite-plugin-preload-prefetch',
    npm: 'https://www.npmjs.com/package/vite-plugin-preload-prefetch',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 7,
    },
  },
})
