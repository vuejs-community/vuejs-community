import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@miyaoka/vite-plugin-commit-info',
  description: 'Vite plugin to provide commit info as a virtual module',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'commit',
    'git',
    'version',
    'build-info',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/miyaoka/vite-plugin-commit-info',
    npm: 'https://www.npmjs.com/package/@miyaoka/vite-plugin-commit-info',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
