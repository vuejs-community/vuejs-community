import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@laikacms/vite-plugin',
  description: 'Vite plugin for Laika CMS: mounts the storage, documents, and assets JSON:API in the dev/preview server, backed by a repository of your choice (a filesystem repository by default).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'headless-cms',
    'laikacms',
    'content-management',
  ],
  links: {
    github: 'https://github.com/laikacms/laikacms',
    npm: 'https://www.npmjs.com/package/@laikacms/vite-plugin',
    website: 'https://github.com/laikacms/laikacms',
  },
  source: {
    github: 'laikacms/laikacms',
    npm: '@laikacms/vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 256,
      weekly: 25,
    },
  },
})
