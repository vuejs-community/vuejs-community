import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ds-insights',
  description: 'Vite plugin: design system usage, deprecated API, and bundle insights reports',
  icon: 'logos:vite-icon',
  version: '2.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'design-system',
    'bundle-analysis',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'IgorToroshin/vite-plugin-ds-insights',
    npm: 'vite-plugin-ds-insights',
  },
  links: {
    github: 'https://github.com/IgorToroshin/vite-plugin-ds-insights',
    npm: 'https://www.npmjs.com/package/vite-plugin-ds-insights',
  },
  stats: {
    downloads: {
      monthly: 507,
      weekly: 11,
    },
  },
})
