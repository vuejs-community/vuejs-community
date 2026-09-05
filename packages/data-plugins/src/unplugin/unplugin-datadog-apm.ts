import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-datadog-apm',
  description: 'Unplugin for Datadog APM instrumentation in bundled Node.js applications',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'datadog',
    'apm',
    'dd-trace',
    'tracing',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'rolldown',
    'esbuild',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/tractorbeamai/unplugin-datadog-apm',
    npm: 'https://www.npmjs.com/package/unplugin-datadog-apm',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
