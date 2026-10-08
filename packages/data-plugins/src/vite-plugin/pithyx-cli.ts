import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pithyx/cli',
  description: 'The pithyx command for Pithyx apps: validate, pack, a mock desktop for development, and a Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pithyx',
    'cli',
    'nas',
    'self-hosted',
    'apps',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pithyx/pithyx',
    npm: 'https://www.npmjs.com/package/@pithyx/cli',
    website: 'https://github.com/pithyx/pithyx/tree/dev/packages/cli#readme',
  },
  source: {
    github: 'pithyx/pithyx',
    npm: '@pithyx/cli',
  },
})
