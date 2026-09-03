import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@telemetry-tracker/vite-plugin',
  description: 'Vite plugin to upload source maps to Telemetry Tracker after build.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'telemetry',
    'vite',
    'vite-plugin',
    'source-maps',
    'sourcemap',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Telemetry-Tracker/telemetry-tracker',
    npm: 'https://www.npmjs.com/package/@telemetry-tracker/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
