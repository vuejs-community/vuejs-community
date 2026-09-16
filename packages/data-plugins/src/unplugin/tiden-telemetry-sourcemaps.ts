import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tiden/telemetry-sourcemaps',
  description: 'Tiden source-map bundler plugin (unplugin). Injects debug-ids and uploads source maps to a Tiden product at build time. No third-party error-SDK dependency.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'qase-tms/tiden-telemetry-js',
    npm: '@tiden/telemetry-sourcemaps',
  },
  links: {
    github: 'https://github.com/qase-tms/tiden-telemetry-js',
    npm: 'https://www.npmjs.com/package/@tiden/telemetry-sourcemaps',
    website: 'https://github.com/qase-tms/tiden-telemetry-js/tree/main/sourcemaps',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 467,
      weekly: 68,
    },
  },
})
