import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@holocron.so/vite',
  description: 'Vite plugin for building documentation websites from MDX files with mintlify-compatible config',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'docs',
    'documentation',
    'mdx',
    'vite',
    'vite-plugin',
    'mintlify',
    'react-server-components',
  ],
  links: {
    github: 'https://github.com/remorses/holocron',
    npm: 'https://www.npmjs.com/package/@holocron.so/vite',
    website: 'https://holocron.so',
  },
  source: {
    github: 'remorses/holocron',
    npm: '@holocron.so/vite',
  },
  stats: {
    stars: 774,
    downloads: {
      monthly: 4762,
      weekly: 977,
    },
  },
})
