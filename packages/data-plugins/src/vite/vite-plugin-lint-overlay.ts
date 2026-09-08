import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lint-overlay',
  description: 'Dev-server overlay for ESLint and TypeScript errors.',
  icon: 'logos:vite-icon',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'lint',
    'overlay',
    'dev-server',
    'developer-tools',
    'diagnostics',
    'worker',
    'error-overlay',
    'frontend',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'max-matinpalo/vite-lint-overlay',
    npm: 'vite-plugin-lint-overlay',
  },
  links: {
    github: 'https://github.com/max-matinpalo/vite-lint-overlay',
    npm: 'https://www.npmjs.com/package/vite-plugin-lint-overlay',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 10,
    },
  },
})
