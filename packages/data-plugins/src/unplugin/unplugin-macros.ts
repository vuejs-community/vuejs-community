import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-macros',
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
    github: 'unplugin/unplugin-macros',
    npm: 'unplugin-macros',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-macros',
    npm: 'https://www.npmjs.com/package/unplugin-macros',
    website: 'https://github.com/unplugin/unplugin-macros#readme',
  },
  stats: {
    stars: 281,
    downloads: {
      monthly: 33627,
      weekly: 7688,
    },
  },
})
