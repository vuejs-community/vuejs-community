import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@coft/workflow-runner',
  description: 'JavaScript runner for Workflow Editor projects',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MrCoft/workflow-runner',
    npm: 'https://www.npmjs.com/package/@coft/workflow-runner',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
