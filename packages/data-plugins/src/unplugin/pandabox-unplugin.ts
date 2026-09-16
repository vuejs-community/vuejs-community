import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pandabox/unplugin',
  description: 'Panda CSS as a Vite/Rollup/Webpack/Esbuild plugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'pandacss',
    'pandabox',
    'panda',
    'typesafety',
    'typescript',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'transform',
  ],
  source: {
    github: 'astahmer/pandabox',
    npm: '@pandabox/unplugin',
  },
  links: {
    github: 'https://github.com/astahmer/pandabox',
    npm: 'https://www.npmjs.com/package/@pandabox/unplugin',
    website: 'https://astahmer.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 465,
      weekly: 72,
    },
  },
})
