import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@makoai/app-sdk',
  description: 'Mako app SDK: data bindings (useQuery/useDuckDB), URL state, theme.',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'mako',
    'data-apps',
    'duckdb',
    'parquet',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mako-ai/mako',
    npm: 'https://www.npmjs.com/package/@makoai/app-sdk',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
