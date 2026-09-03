import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@errpulse/vite',
  description: 'ErrPulse Vite plugin — zero-config error monitoring for any Vite app, one line in vite.config',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'error-monitoring',
    'error-tracking',
    'errpulse',
    'debugging',
    'devtools',
    'frontend',
    'sentry-alternative',
    'zero-config',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Meghshyams/ErrPulse',
    npm: 'https://www.npmjs.com/package/@errpulse/vite',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 6,
    },
  },
})
