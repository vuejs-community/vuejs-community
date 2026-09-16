import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ivi/vite-plugin',
  description: 'Vite plugin for ivi library.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'ivi',
    'rollup-plugin',
  ],
  source: {
    github: 'localvoid/ivi',
    npm: '@ivi/vite-plugin',
  },
  links: {
    github: 'https://github.com/localvoid/ivi',
    npm: 'https://www.npmjs.com/package/@ivi/vite-plugin',
    website: 'https://github.com/localvoid/ivi',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 6,
    },
  },
})
