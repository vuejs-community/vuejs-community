import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@testable-ui/vite',
  description: 'Vite adapter for automatic, deterministic, semantic data-testid generation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'testing',
    'data-testid',
    'test-id',
    'vite-plugin',
    'e2e',
    'testing-library',
    'playwright',
  ],
  source: {
    github: 'aleo-it/testable-ui',
    npm: '@testable-ui/vite',
  },
  links: {
    github: 'https://github.com/aleo-it/testable-ui',
    npm: 'https://www.npmjs.com/package/@testable-ui/vite',
    website: 'https://github.com/aleo-it/testable-ui#readme',
  },
})
