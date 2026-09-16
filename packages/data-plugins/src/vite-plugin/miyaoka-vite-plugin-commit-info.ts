import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@miyaoka/vite-plugin-commit-info',
  description: 'Vite plugin to provide commit info as a virtual module',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'commit',
    'git',
    'version',
    'build-info',
  ],
  source: {
    github: 'miyaoka/vite-plugin-commit-info',
    npm: '@miyaoka/vite-plugin-commit-info',
  },
  links: {
    github: 'https://github.com/miyaoka/vite-plugin-commit-info',
    npm: 'https://www.npmjs.com/package/@miyaoka/vite-plugin-commit-info',
    website: 'https://github.com/miyaoka/vite-plugin-commit-info#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
