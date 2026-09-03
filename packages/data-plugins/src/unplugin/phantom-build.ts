import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'phantom-build',
  description: 'Build-time code-splitting for React (event-handler extraction + React.lazy/Suspense wrapping), plus a read-only RSC migration-readiness analyzer (phantom rsc)',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'react',
    'code-splitting',
    'lazy-loading',
    'vite',
    'webpack',
    'rspack',
    'build-plugin',
    'event-handlers',
    'performance',
    'suspense',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/Phoenixrr2113/phantom',
    npm: 'https://www.npmjs.com/package/phantom-build',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 6,
    },
  },
})
