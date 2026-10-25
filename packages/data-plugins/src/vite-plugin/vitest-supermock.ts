import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vitest-supermock',
  description: 'Mock a module in Vitest from a regular import: const routerMock = supermock(router). A Vite plugin hoists the vi.mock call for you.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitest',
    'mock',
    'mocking',
    'vi.mock',
    'vite-plugin',
    'testing',
    'vitest-mock-extended',
  ],
  links: {
    github: 'https://github.com/doktor500/vitest-supermock',
    npm: 'https://www.npmjs.com/package/vitest-supermock',
    website: 'https://github.com/doktor500/vitest-supermock#readme',
  },
  source: {
    github: 'doktor500/vitest-supermock',
    npm: 'vitest-supermock',
  },
})
