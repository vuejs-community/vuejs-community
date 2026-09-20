import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preload-prefetch',
  description: 'Vite plugin to preload and/or prefetch resources that match a regular expression.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup',
    'preload',
    'prefetch',
  ],
  links: {
    github: 'https://github.com/kevinfarrugia/vite-plugin-preload-prefetch',
    npm: 'https://www.npmjs.com/package/vite-plugin-preload-prefetch',
    website: 'https://github.com/kevinfarrugia/vite-plugin-preload-prefetch#readme',
  },
  source: {
    github: 'kevinfarrugia/vite-plugin-preload-prefetch',
    npm: 'vite-plugin-preload-prefetch',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
