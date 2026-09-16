import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@query-key-gen/used-generator',
  description: 'Vite plugin that scans your project and tracks where `queryKey` values from `globalQueryKeys` are used — useful for dead query analysis, usage stats, or documentation.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react-query',
    'queryKey',
    'vite-plugin',
    'vite',
    'code-analysis',
    'query-usage',
    'typescript',
    'query-tracker',
    'query-key-used',
    'query-key-gen',
    'plugin',
    'static-analysis',
    'debug-tools',
  ],
  source: {
    github: 'Codezzzz/gen-query-key',
    npm: '@query-key-gen/used-generator',
  },
  links: {
    github: 'https://github.com/Codezzzz/gen-query-key',
    npm: 'https://www.npmjs.com/package/@query-key-gen/used-generator',
    website: 'https://github.com/Codezzzz/gen-query-key#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 39,
      weekly: 2,
    },
  },
})
