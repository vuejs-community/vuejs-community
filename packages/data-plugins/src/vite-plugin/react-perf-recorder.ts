import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-perf-recorder',
  description: 'Record React re-renders in the browser: cascade roots, hook-level reasons, store causes and user actions, saved as sessions an agent reads over MCP',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    're-render',
    'renders',
    'performance',
    'profiler',
    'vite',
    'vite-plugin',
    'mcp',
    'claude',
    'zustand',
    'react-query',
    'devtools',
  ],
  links: {
    github: 'https://github.com/deadrime/react-perf-recorder',
    npm: 'https://www.npmjs.com/package/react-perf-recorder',
    website: 'https://deadrime.github.io/react-perf-recorder/',
  },
  source: {
    github: 'deadrime/react-perf-recorder',
    npm: 'react-perf-recorder',
  },
})
