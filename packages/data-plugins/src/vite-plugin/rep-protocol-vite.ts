import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rep-protocol/vite',
  description: 'Vite plugin for the Runtime Environment Protocol (REP). Injects REP environment variables during development without needing the Go gateway.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'environment-variables',
    'runtime-config',
    'docker',
    'containers',
    'frontend',
    'rep',
  ],
  source: {
    github: 'RuachTech/rep',
    npm: '@rep-protocol/vite',
  },
  links: {
    github: 'https://github.com/RuachTech/rep',
    npm: 'https://www.npmjs.com/package/@rep-protocol/vite',
    website: 'https://github.com/RuachTech/rep#readme',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
