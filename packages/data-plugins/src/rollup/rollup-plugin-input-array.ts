import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-input-array',
  description: 'A small rollup plugin for handling multiple inputs.',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'tsne/rollup-plugin-input-array',
    npm: 'rollup-plugin-input-array',
  },
  links: {
    github: 'https://github.com/tsne/rollup-plugin-input-array',
    npm: 'https://www.npmjs.com/package/rollup-plugin-input-array',
  },
  stats: {
    downloads: {
      monthly: 125,
      weekly: 20,
    },
  },
})
