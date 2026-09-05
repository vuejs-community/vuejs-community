import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-ork',
  description: 'Provides virtual modules for .ork imports.',
  version: '0.0.1-alpha.1',
  category: 'plugin',
  tags: [
    'ork',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'typescript',
    'orm',
    'virtual-modules',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/unplugin-ork',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
