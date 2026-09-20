import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chrock-studio/unplugin-auto-export',
  description: 'scans files in specified directories and generates an `index.ts` file to manage module exports in a batch and automated manner.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'vite',
    'webpack',
    'esbuild',
    'plugin',
    'unplugin',
    'auto-export',
    'codegen',
  ],
  links: {
    github: 'https://github.com/chrock-studio/unplugin-auto-export',
    npm: 'https://www.npmjs.com/package/@chrock-studio/unplugin-auto-export',
    website: 'https://github.com/chrock-studio/unplugin-auto-export/tree/main/packages/unplugin-auto-export',
  },
  source: {
    github: 'chrock-studio/unplugin-auto-export',
    npm: '@chrock-studio/unplugin-auto-export',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
