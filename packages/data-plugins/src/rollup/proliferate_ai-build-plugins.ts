import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@proliferate_ai/build-plugins',
  description: 'Build plugins for Proliferate SDK release ID injection',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'proliferate',
    'webpack-plugin',
    'vite-plugin',
    'rollup-plugin',
    'esbuild-plugin',
    'source-maps',
    'release',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@proliferate_ai/build-plugins',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
