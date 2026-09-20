import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'phantom-build',
  description: 'Build-time code-splitting for React (event-handler extraction + React.lazy/Suspense wrapping), plus a read-only RSC migration-readiness analyzer (phantom rsc)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/Phoenixrr2113/phantom',
    npm: 'https://www.npmjs.com/package/phantom-build',
    website: 'https://github.com/Phoenixrr2113/phantom#readme',
  },
  source: {
    github: 'Phoenixrr2113/phantom',
    npm: 'phantom-build',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 39,
      weekly: 13,
    },
  },
})
