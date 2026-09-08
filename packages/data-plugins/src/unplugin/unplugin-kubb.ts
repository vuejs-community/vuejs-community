import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-kubb',
  description: 'Integration of Kubb for Vite, Webpack, Rollup, esbuild, Rspack, Nuxt, and Astro.',
  icon: 'icon:dark-unplugin',
  version: '5.1.0',
  category: 'plugin',
  tags: [
    'astro',
    'codegen',
    'esbuild',
    'farm',
    'kubb',
    'meta-framework',
    'nuxt',
    'rollup',
    'rspack',
    'typescript',
    'unplugin',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'kubb-labs/kubb',
    npm: 'unplugin-kubb',
  },
  links: {
    github: 'https://github.com/kubb-labs/kubb',
    npm: 'https://www.npmjs.com/package/unplugin-kubb',
  },
  stats: {
    downloads: {
      monthly: 31228,
      weekly: 12219,
    },
  },
})
