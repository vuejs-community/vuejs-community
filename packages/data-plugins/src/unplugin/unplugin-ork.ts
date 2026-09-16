import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-ork',
  description: 'Provides virtual modules for .ork imports.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    npm: 'unplugin-ork',
  },
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-ork',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
