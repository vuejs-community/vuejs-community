import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@redstardev/unplugin-version-injector',
  description: 'A universal plugin to inject your application\'s version number or today\'s date into your files. Supports Vite, Rollup, Rolldown, webpack, Rspack, esbuild, and Farm.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'esbuild',
    'farm',
    'inject',
    'rolldown',
    'rollup',
    'rspack',
    'unplugin',
    'version',
    'vite',
    'webpack',
  ],
  links: {
    github: 'https://github.com/RedStar071/unplugin-version-injector',
    npm: 'https://www.npmjs.com/package/@redstardev/unplugin-version-injector',
    website: 'https://redstar071.dev',
  },
  source: {
    github: 'RedStar071/unplugin-version-injector',
    npm: '@redstardev/unplugin-version-injector',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 525,
      weekly: 77,
    },
  },
})
