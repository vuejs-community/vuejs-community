import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'workflow',
  description: 'Workflow DevKit - Build durable, resilient, and observable workflows',
  icon: 'icon:workflow',
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
    stars: 2378,
    downloads: {
      monthly: 3742879,
      weekly: 789765,
    },
  },
})
