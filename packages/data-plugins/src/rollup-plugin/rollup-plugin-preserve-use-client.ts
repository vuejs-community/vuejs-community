import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-preserve-use-client',
  description: 'A Rollup plugin to preserve \'use client\' directives for React 18 components.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'plugin',
    'react',
    'use client',
    'server components',
    'client components',
  ],
  source: {
    github: 'soobing/rollup-plugin-preserve-use-client',
    npm: 'rollup-plugin-preserve-use-client',
  },
  links: {
    github: 'https://github.com/soobing/rollup-plugin-preserve-use-client',
    npm: 'https://www.npmjs.com/package/rollup-plugin-preserve-use-client',
    website: 'https://github.com/soobing/rollup-plugin-preserve-use-client#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 18219,
      weekly: 3674,
    },
  },
})
