import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@makoai/app-sdk',
  description: 'Mako app SDK: data bindings (useQuery/useDuckDB), URL state, theme.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mako',
    'data-apps',
    'duckdb',
    'parquet',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mako-ai/mako',
    npm: 'https://www.npmjs.com/package/@makoai/app-sdk',
    website: 'https://docs.mako.ai/mcp-server/',
  },
  source: {
    github: 'mako-ai/mako',
    npm: '@makoai/app-sdk',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 39,
      weekly: 18,
    },
  },
})
