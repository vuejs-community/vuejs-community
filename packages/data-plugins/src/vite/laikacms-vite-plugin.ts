import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@laikacms/vite-plugin',
  description: 'Vite plugin for Laika CMS: mounts the storage, documents, and assets JSON:API in the dev/preview server, backed by a repository of your choice (a filesystem repository by default).',
  version: '6.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'headless-cms',
    'laikacms',
    'content-management',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/laikacms/laikacms',
    npm: 'https://www.npmjs.com/package/@laikacms/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 585,
      weekly: 6,
    },
  },
})
