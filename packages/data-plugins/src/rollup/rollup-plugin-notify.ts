import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-notify',
  description: '📟 Displays rollup errors as system notifications.',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'notify',
    'notification',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'MikeKovarik/rollup-plugin-notify',
    npm: 'rollup-plugin-notify',
  },
  links: {
    github: 'https://github.com/MikeKovarik/rollup-plugin-notify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-notify',
  },
  stats: {
    downloads: {
      monthly: 1102,
      weekly: 299,
    },
  },
})
