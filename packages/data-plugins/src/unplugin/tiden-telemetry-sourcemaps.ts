import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tiden/telemetry-sourcemaps',
  description: 'Tiden source-map bundler plugin (unplugin). Injects debug-ids and uploads source maps to a Tiden product at build time. No third-party error-SDK dependency.',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'tiden',
    'source-maps',
    'debug-id',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/qase-tms/tiden-telemetry-js',
    npm: 'https://www.npmjs.com/package/@tiden/telemetry-sourcemaps',
  },
  stats: {
    downloads: {
      monthly: 481,
      weekly: 186,
    },
  },
})
