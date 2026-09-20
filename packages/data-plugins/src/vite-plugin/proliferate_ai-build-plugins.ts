import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@proliferate_ai/build-plugins',
  description: 'Build plugins for Proliferate SDK release ID injection',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'proliferate',
    'webpack-plugin',
    'vite-plugin',
    'rollup-plugin',
    'esbuild-plugin',
    'source-maps',
    'release',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@proliferate_ai/build-plugins',
  },
  source: {
    npm: '@proliferate_ai/build-plugins',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
