import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'otel-zoneless-context',
  description: 'OpenTelemetry context manager for the browser without zone.js, plus a bundler plugin that rewrites the awaits in your code so the active context comes back after each one',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'opentelemetry',
    'context-manager',
    'zoneless',
    'async-await',
    'browser',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'esbuild-plugin',
  ],
  links: {
    github: 'https://github.com/adityareddy-dev/otel-zoneless-context',
    npm: 'https://www.npmjs.com/package/otel-zoneless-context',
    website: 'https://github.com/adityareddy-dev/otel-zoneless-context#readme',
  },
  source: {
    github: 'adityareddy-dev/otel-zoneless-context',
    npm: 'otel-zoneless-context',
  },
})
