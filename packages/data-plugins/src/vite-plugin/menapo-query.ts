import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/query',
  description: 'Server data for kit apps: query("/path") and mutation("METHOD /path") typed from the app\'s API, cached, deduplicated and refreshed by REST convention, read with useQuery in every framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cache',
    'data-fetching',
    'query',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/query',
    website: 'https://github.com/menapo/kit/blob/main/packages/query/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/query',
  },
})
