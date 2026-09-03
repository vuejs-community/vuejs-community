import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'endpoint-plus-devtools',
  description: 'Vite DevTools companion plugin for endpoint-plus, featuring API scanner and automated TypeScript type generation.',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'api-scanner',
    'code-generator',
    'devtools',
    'endpoint-plus',
    'http-client',
    'quicktype',
    'typegen',
    'typescript',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zandko/endpoint-plus',
    npm: 'https://www.npmjs.com/package/endpoint-plus-devtools',
  },
  stats: {
    downloads: {
      monthly: 69,
      weekly: 8,
    },
  },
})
