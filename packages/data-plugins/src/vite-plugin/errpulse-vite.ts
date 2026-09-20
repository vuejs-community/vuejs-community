import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@errpulse/vite',
  description: 'ErrPulse Vite plugin — zero-config error monitoring for any Vite app, one line in vite.config',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Meghshyams/ErrPulse',
    npm: 'https://www.npmjs.com/package/@errpulse/vite',
    website: 'https://github.com/Meghshyams/ErrPulse#readme',
  },
  source: {
    github: 'Meghshyams/ErrPulse',
    npm: '@errpulse/vite',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
