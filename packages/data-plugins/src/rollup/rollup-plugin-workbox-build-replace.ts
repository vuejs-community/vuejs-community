import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-workbox-build-replace',
  description: 'Rollup plugin to apply workbox-build in replace mode',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'workbox',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Jude95/rollup-plugin-workbox-build',
    npm: 'rollup-plugin-workbox-build-replace',
  },
  links: {
    github: 'https://github.com/Jude95/rollup-plugin-workbox-build',
    npm: 'https://www.npmjs.com/package/rollup-plugin-workbox-build-replace',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
