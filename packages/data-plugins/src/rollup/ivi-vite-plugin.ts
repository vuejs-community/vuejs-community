import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ivi/vite-plugin',
  description: 'Vite plugin for ivi library.',
  version: '5.0.1',
  category: 'plugin',
  tags: [
    'ivi',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/localvoid/ivi',
    npm: 'https://www.npmjs.com/package/@ivi/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 9,
    },
  },
})
