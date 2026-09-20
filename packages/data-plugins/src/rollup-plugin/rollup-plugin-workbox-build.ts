import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-workbox-build',
  description: 'Rollup plugin that builds a service worker with workbox-build',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'service-worker',
    'workbox',
  ],
  links: {
    github: 'https://github.com/Rainrider/rollup-plugin-workbox-build',
    npm: 'https://www.npmjs.com/package/rollup-plugin-workbox-build',
    website: 'https://github.com/Rainrider/rollup-plugin-workbox-build/#readme',
  },
  source: {
    github: 'Rainrider/rollup-plugin-workbox-build',
    npm: 'rollup-plugin-workbox-build',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 60,
      weekly: 22,
    },
  },
})
