import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@razohq/razo',
  description: 'Playwright UI controls with human names that narrate every action twice: a readable test.step() sentence and a structured StepEvent JSON artifact built for AI failure analysis.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'playwright',
    'testing',
    'e2e',
    'test-automation',
    'page-object',
    'reporter',
    'ai',
    'test-reporting',
    'vite-plugin',
    'testid',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/razohq/razo',
    npm: 'https://www.npmjs.com/package/@razohq/razo',
  },
  stats: {
    downloads: {
      monthly: 74,
      weekly: 10,
    },
  },
})
