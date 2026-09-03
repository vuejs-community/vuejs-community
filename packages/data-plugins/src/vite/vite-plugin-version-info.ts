import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-info',
  description: 'A Vite plugin that injects software version metadata as build-time globals for easy display in your UI or console.',
  version: '2.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'package',
    'version',
    'git',
    'commit',
    'branch',
    'date',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-info',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
