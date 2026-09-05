import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-preserve-use-client',
  description: 'A Rollup plugin to preserve \'use client\' directives for React 18 components.',
  version: '3.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'plugin',
    'react',
    'use client',
    'server components',
    'client components',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/soobing/rollup-plugin-preserve-use-client',
    npm: 'https://www.npmjs.com/package/rollup-plugin-preserve-use-client',
  },
  stats: {
    downloads: {
      monthly: 20240,
      weekly: 6243,
    },
  },
})
