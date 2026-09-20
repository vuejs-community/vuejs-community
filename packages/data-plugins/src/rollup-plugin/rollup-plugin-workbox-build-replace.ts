import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-workbox-build-replace',
  description: 'Rollup plugin to apply workbox-build in replace mode',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'workbox',
  ],
  links: {
    github: 'https://github.com/Jude95/rollup-plugin-workbox-build',
    npm: 'https://www.npmjs.com/package/rollup-plugin-workbox-build-replace',
    website: 'https://github.com/Jude95/rollup-plugin-workbox-build#readme',
  },
  source: {
    github: 'Jude95/rollup-plugin-workbox-build',
    npm: 'rollup-plugin-workbox-build-replace',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
