import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vitest-plugin-module-federation',
  description: 'Auto-mock Module Federation remote imports in Vitest — no more unresolvable \'remoteApp/Component\' imports in unit tests.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vitest',
    'vitest-plugin',
    'vite-plugin',
    'module-federation',
    'microfrontend',
    'mock',
    'testing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chrisboakes/vitest-plugin-module-federation',
    npm: 'https://www.npmjs.com/package/vitest-plugin-module-federation',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 11,
    },
  },
})
