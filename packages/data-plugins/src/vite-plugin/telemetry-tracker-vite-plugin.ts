import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@telemetry-tracker/vite-plugin',
  description: 'Vite plugin to upload source maps to Telemetry Tracker after build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'telemetry',
    'vite',
    'vite-plugin',
    'source-maps',
    'sourcemap',
  ],
  source: {
    github: 'Telemetry-Tracker/telemetry-tracker',
    npm: '@telemetry-tracker/vite-plugin',
  },
  links: {
    github: 'https://github.com/Telemetry-Tracker/telemetry-tracker',
    npm: 'https://www.npmjs.com/package/@telemetry-tracker/vite-plugin',
    website: 'https://github.com/Telemetry-Tracker/telemetry-tracker#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
