import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'endpoint-plus-devtools',
  description: 'Vite DevTools companion plugin for endpoint-plus, featuring API scanner and automated TypeScript type generation.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'zandko/endpoint-plus',
    npm: 'endpoint-plus-devtools',
  },
  links: {
    github: 'https://github.com/zandko/endpoint-plus',
    npm: 'https://www.npmjs.com/package/endpoint-plus-devtools',
    website: 'https://github.com/zandko/endpoint-plus#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 53,
      weekly: 5,
    },
  },
})
