import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@coft/workflow-runner',
  description: 'JavaScript runner for Workflow Editor projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MrCoft/workflow-runner',
    npm: 'https://www.npmjs.com/package/@coft/workflow-runner',
    website: 'https://github.com/MrCoft/workflow-runner#readme',
  },
  source: {
    github: 'MrCoft/workflow-runner',
    npm: '@coft/workflow-runner',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
