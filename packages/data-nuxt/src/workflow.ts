import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'workflow',
  description: 'Workflow DevKit - Build durable, resilient, and observable workflows',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vercel/workflow',
    npm: 'https://npmjs.com/package/workflow',
    website: 'https://workflow-sdk.dev/',
  },
  source: {
    github: 'vercel/workflow#main/packages/workflow',
    npm: 'workflow',
  },
  stats: {
    stars: 2375,
    downloads: {
      monthly: 3929175,
      weekly: 1054894,
    },
  },
})
