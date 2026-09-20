import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ivi/rollup-plugin',
  description: 'Rollup plugin for ivi library.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'ivi',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/localvoid/ivi',
    npm: 'https://www.npmjs.com/package/@ivi/rollup-plugin',
    website: 'https://github.com/localvoid/ivi',
  },
  source: {
    github: 'localvoid/ivi',
    npm: '@ivi/rollup-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
