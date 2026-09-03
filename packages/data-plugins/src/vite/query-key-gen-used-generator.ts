import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@query-key-gen/used-generator',
  description: 'Vite plugin that scans your project and tracks where `queryKey` values from `globalQueryKeys` are used — useful for dead query analysis, usage stats, or documentation.',
  version: '0.11.5',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Codezzzz/gen-query-key',
    npm: 'https://www.npmjs.com/package/@query-key-gen/used-generator',
  },
  stats: {
    downloads: {
      monthly: 86,
      weekly: 25,
    },
  },
})
