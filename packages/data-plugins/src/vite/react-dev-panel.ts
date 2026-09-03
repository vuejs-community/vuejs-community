import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-dev-panel',
  description: 'A framework-agnostic, self-contained floating dev panel for React: Developer Logs, Page Performance, and a Component Graph Inspector (hover-to-source, component tree, open-in-editor).',
  version: '0.2.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/react-dev-panel',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
