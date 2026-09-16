import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ariesclark/unplugin-macros',
  description: 'Macros for bundlers.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  source: {
    github: 'ariesclark/unplugin-macros',
    npm: '@ariesclark/unplugin-macros',
  },
  links: {
    github: 'https://github.com/ariesclark/unplugin-macros',
    npm: 'https://www.npmjs.com/package/@ariesclark/unplugin-macros',
    website: 'https://github.com/ariesclark/unplugin-macros#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1513,
      weekly: 109,
    },
  },
})
