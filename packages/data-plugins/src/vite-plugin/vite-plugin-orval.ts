import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-orval',
  description: 'Run orval during vite dev and build, and regenerate your API client whenever the OpenAPI spec changes.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'codegen',
    'openapi',
    'orval',
    'swagger',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'mees-/vite-plugin-orval',
    npm: 'vite-plugin-orval',
  },
  links: {
    github: 'https://github.com/mees-/vite-plugin-orval',
    npm: 'https://www.npmjs.com/package/vite-plugin-orval',
    website: 'https://github.com/mees-/vite-plugin-orval#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
