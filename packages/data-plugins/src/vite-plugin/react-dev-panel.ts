import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-dev-panel',
  description: 'A framework-agnostic, self-contained floating dev panel for React: Developer Logs, Page Performance, and a Component Graph Inspector (hover-to-source, component tree, open-in-editor).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'devtools',
    'inspector',
    'component-graph',
    'web-vitals',
    'developer-logs',
    'vite-plugin',
    'nextjs',
  ],
  source: {
    npm: 'react-dev-panel',
  },
  links: {
    npm: 'https://www.npmjs.com/package/react-dev-panel',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
