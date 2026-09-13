import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-orval',
  description: 'Run orval during vite dev and build, and regenerate your API client whenever the OpenAPI spec changes.',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'codegen',
    'openapi',
    'orval',
    'swagger',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'mees-/vite-plugin-orval',
    npm: 'vite-plugin-orval',
  },
  links: {
    github: 'https://github.com/mees-/vite-plugin-orval',
    npm: 'https://www.npmjs.com/package/vite-plugin-orval',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
