import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vitest-plugin-module-federation',
  description: 'Auto-mock Module Federation remote imports in Vitest — no more unresolvable \'remoteApp/Component\' imports in unit tests.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitest',
    'vitest-plugin',
    'vite-plugin',
    'module-federation',
    'microfrontend',
    'mock',
    'testing',
  ],
  source: {
    github: 'chrisboakes/vitest-plugin-module-federation',
    npm: 'vitest-plugin-module-federation',
  },
  links: {
    github: 'https://github.com/chrisboakes/vitest-plugin-module-federation',
    npm: 'https://www.npmjs.com/package/vitest-plugin-module-federation',
    website: 'https://github.com/chrisboakes/vitest-plugin-module-federation#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 39,
      weekly: 4,
    },
  },
})
