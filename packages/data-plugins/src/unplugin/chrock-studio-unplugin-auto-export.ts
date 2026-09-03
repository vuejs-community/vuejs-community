import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@chrock-studio/unplugin-auto-export',
  description: 'scans files in specified directories and generates an `index.ts` file to manage module exports in a batch and automated manner.',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'vite',
    'webpack',
    'esbuild',
    'plugin',
    'unplugin',
    'auto-export',
    'codegen',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/chrock-studio/unplugin-auto-export',
    npm: 'https://www.npmjs.com/package/@chrock-studio/unplugin-auto-export',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 11,
    },
  },
})
