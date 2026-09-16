import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@powerlines/unplugin',
  description: 'A package containing a Powerlines plugin to assist in developing other Powerlines plugins.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'powerlines',
    'vite',
    'rolldown',
    'rollup',
    'esbuild',
    'tsdown',
    'tsup',
    'rspack',
    'webpack',
    'unbuild',
    'next',
    'nuxt',
    'farm',
    'astro',
    'storm-software',
  ],
  source: {
    github: 'storm-software/powerlines',
    npm: '@powerlines/unplugin',
  },
  links: {
    github: 'https://github.com/storm-software/powerlines',
    npm: 'https://www.npmjs.com/package/@powerlines/unplugin',
    website: 'https://stormsoftware.com',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 3954,
      weekly: 898,
    },
  },
})
