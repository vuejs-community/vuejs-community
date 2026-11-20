import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@contentia/vite-plugin',
  description: 'Vite plugin for Contentia: mounts the storage, documents, and assets JSON:API in the dev/preview server, backed by a repository of your choice (a filesystem repository by default).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'headless-cms',
    'contentia',
    'content-management',
  ],
  links: {
    github: 'https://github.com/contentia-dev/contentia',
    npm: 'https://www.npmjs.com/package/@contentia/vite-plugin',
    website: 'https://contentia.dev/guides/vite',
  },
  source: {
    github: 'contentia-dev/contentia',
    npm: '@contentia/vite-plugin',
  },
})
