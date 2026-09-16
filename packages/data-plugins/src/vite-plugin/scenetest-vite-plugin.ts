import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@scenetest/vite-plugin',
  description: 'Vite plugin for scenetest - strips assertions in production, injects dev panel',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'testing',
    'e2e',
    'playwright',
    'vite',
    'vite-plugin',
    'assertions',
  ],
  source: {
    github: 'scenetest/scenetest-js',
    npm: '@scenetest/vite-plugin',
  },
  links: {
    github: 'https://github.com/scenetest/scenetest-js',
    npm: 'https://www.npmjs.com/package/@scenetest/vite-plugin',
    website: 'https://github.com/scenetest/scenetest-js#readme',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 542,
      weekly: 8,
    },
  },
})
