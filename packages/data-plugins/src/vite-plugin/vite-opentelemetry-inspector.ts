import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-opentelemetry-inspector',
  description: 'OpenTelemetry traces, logs & metrics inspector as a standalone Vite DevTools devframe',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'devtools',
    'devframe',
    'opentelemetry',
    'otel',
    'tracing',
    'observability',
  ],
  links: {
    github: 'https://github.com/lutejka/vite-opentelemetry-inspector',
    npm: 'https://www.npmjs.com/package/vite-opentelemetry-inspector',
    website: 'https://github.com/lutejka/vite-opentelemetry-inspector#readme',
  },
  source: {
    github: 'lutejka/vite-opentelemetry-inspector',
    npm: 'vite-opentelemetry-inspector',
  },
})
