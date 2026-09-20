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
  links: {
    github: 'https://github.com/Telemetry-Tracker/telemetry-tracker',
    npm: 'https://www.npmjs.com/package/@telemetry-tracker/vite-plugin',
    website: 'https://github.com/Telemetry-Tracker/telemetry-tracker#readme',
  },
  source: {
    github: 'Telemetry-Tracker/telemetry-tracker',
    npm: '@telemetry-tracker/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
