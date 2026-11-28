import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@annealer/unplugin',
  description: 'Unplugin for Annealer: checks and fixes attribute/declaration order in Vite, Rsbuild, Rspack, webpack, Rollup and Rolldown.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'formatter',
    'annealer',
    'unplugin',
    'vite',
    'rsbuild',
    'rspack',
    'webpack',
    'rollup',
    'rolldown',
  ],
  links: {
    github: 'https://github.com/logue/annealer',
    npm: 'https://www.npmjs.com/package/@annealer/unplugin',
    website: 'https://github.com/logue/annealer',
  },
  source: {
    github: 'logue/annealer',
    npm: '@annealer/unplugin',
  },
})
