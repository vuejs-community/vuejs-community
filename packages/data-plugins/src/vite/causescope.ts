import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'causescope',
  description: 'Click any UI. Trace the cause. A local-first React provenance inspector for Vite development.',
  version: '1.0.0-beta.10',
  category: 'plugin',
  tags: [
    'react',
    'vite',
    'vite-plugin',
    'debugging',
    'devtools',
    'provenance',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stackloomdev/causescope',
    npm: 'https://www.npmjs.com/package/causescope',
  },
  stats: {
    downloads: {
      monthly: 192,
      weekly: 13,
    },
  },
})
