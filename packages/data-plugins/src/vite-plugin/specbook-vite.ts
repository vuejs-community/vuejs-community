import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@specbook/vite',
  description: 'The Specbook plugin for Vite: the registry, the docs UI hooks and the dev server credential proxy.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'specbook',
    'vite',
    'vite-plugin',
    'openapi',
    'api-explorer',
  ],
  links: {
    github: 'https://github.com/specbook-dev/specbook',
    npm: 'https://www.npmjs.com/package/@specbook/vite',
    website: 'https://ui.specbook.dev',
  },
  source: {
    github: 'specbook-dev/specbook',
    npm: '@specbook/vite',
  },
})
