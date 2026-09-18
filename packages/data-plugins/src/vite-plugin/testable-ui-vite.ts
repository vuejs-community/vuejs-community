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
    npm: '@testable-ui/vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@testable-ui/vite',
  },
})
