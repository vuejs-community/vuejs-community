import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@telemetryos/vite-plugin-application-workers',
  description: 'A Vite plugin for bundling TelemetryOS background workers and server workers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'worker',
    'web-worker',
    'cloudflare',
    'cloudflare-workers',
    'TelemetryTV',
    'interactive kiosk',
    'digital signage',
    'digital menu board',
    'digital directory',
    'display management',
    'displays at scale',
  ],
  source: {
    npm: '@telemetryos/vite-plugin-application-workers',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@telemetryos/vite-plugin-application-workers',
    website: 'https://github.com/TelemetryTV/Application-API#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 323,
      weekly: 39,
    },
  },
})
