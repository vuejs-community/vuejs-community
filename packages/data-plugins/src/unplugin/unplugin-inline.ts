import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inline',
  description: 'An unplugin to inline pure function calls.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'esbuild',
    'vite',
    'rollup',
    'webpack',
    'plugin',
    'performance',
    'build',
    'inline',
    'function',
    'macro',
  ],
  links: {
    github: 'https://github.com/unstoppablecarl/unplugin-inline',
    npm: 'https://www.npmjs.com/package/unplugin-inline',
    website: 'https://github.com/unstoppablecarl/unplugin-inline#readme',
  },
  source: {
    github: 'unstoppablecarl/unplugin-inline',
    npm: 'unplugin-inline',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
