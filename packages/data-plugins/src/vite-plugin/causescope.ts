import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'causescope',
  description: 'Click any UI. Trace the cause. A local-first React provenance inspector for Vite development.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'vite',
    'vite-plugin',
    'debugging',
    'devtools',
    'provenance',
    'typescript',
  ],
  links: {
    github: 'https://github.com/stackloomdev/causescope',
    npm: 'https://www.npmjs.com/package/causescope',
    website: 'https://stackloomdev.github.io/causescope/',
  },
  source: {
    github: 'stackloomdev/causescope',
    npm: 'causescope',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 72,
      weekly: 7,
    },
  },
})
