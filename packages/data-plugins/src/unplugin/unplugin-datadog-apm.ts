import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-datadog-apm',
  description: 'Unplugin for Datadog APM instrumentation in bundled Node.js applications',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'tractorbeamai/unplugin-datadog-apm',
    npm: 'unplugin-datadog-apm',
  },
  links: {
    github: 'https://github.com/tractorbeamai/unplugin-datadog-apm',
    npm: 'https://www.npmjs.com/package/unplugin-datadog-apm',
    website: 'https://github.com/tractorbeamai/unplugin-datadog-apm#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 9,
    },
  },
})
