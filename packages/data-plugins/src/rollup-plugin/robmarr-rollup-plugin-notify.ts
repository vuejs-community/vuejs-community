import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@robmarr/rollup-plugin-notify',
  description: '📟 Displays rollup errors as system notifications.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'notify',
    'notification',
  ],
  source: {
    github: 'MikeKovarik/rollup-plugin-notify',
    npm: '@robmarr/rollup-plugin-notify',
  },
  links: {
    github: 'https://github.com/MikeKovarik/rollup-plugin-notify',
    npm: 'https://www.npmjs.com/package/@robmarr/rollup-plugin-notify',
    website: 'https://github.com/MikeKovarik/rollup-plugin-notify#readme',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
