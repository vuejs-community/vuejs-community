import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lint-overlay',
  description: 'Dev-server overlay for ESLint and TypeScript errors.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/max-matinpalo/vite-lint-overlay',
    npm: 'https://www.npmjs.com/package/vite-plugin-lint-overlay',
    website: 'https://github.com/max-matinpalo/vite-lint-overlay#readme',
  },
  source: {
    github: 'max-matinpalo/vite-lint-overlay',
    npm: 'vite-plugin-lint-overlay',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 3,
    },
  },
})
