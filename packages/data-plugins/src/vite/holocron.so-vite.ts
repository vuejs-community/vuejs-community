import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@holocron.so/vite',
  description: 'Vite plugin for building documentation websites from MDX files with mintlify-compatible config',
  version: '0.33.1',
  category: 'plugin',
  tags: [
    'docs',
    'documentation',
    'mdx',
    'vite',
    'vite-plugin',
    'mintlify',
    'react-server-components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/remorses/holocron',
    npm: 'https://www.npmjs.com/package/@holocron.so/vite',
  },
  stats: {
    downloads: {
      monthly: 4341,
      weekly: 1161,
    },
  },
})
