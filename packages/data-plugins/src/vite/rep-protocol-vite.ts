import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rep-protocol/vite',
  description: 'Vite plugin for the Runtime Environment Protocol (REP). Injects REP environment variables during development without needing the Go gateway.',
  version: '0.1.15',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/RuachTech/rep',
    npm: 'https://www.npmjs.com/package/@rep-protocol/vite',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 4,
    },
  },
})
