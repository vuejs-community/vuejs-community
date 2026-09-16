import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'swift-node-unplugin',
  description: 'Unplugin adapters that build and bundle Swift Node native assets.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'swift',
    'node',
    'native',
    'unplugin',
    'vite',
    'rollup',
    'webpack',
    'esbuild',
    'tsdown',
    'rolldown',
  ],
  source: {
    github: 'biw/swift-node',
    npm: 'swift-node-unplugin',
  },
  links: {
    github: 'https://github.com/biw/swift-node',
    npm: 'https://www.npmjs.com/package/swift-node-unplugin',
    website: 'https://github.com/biw/swift-node#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 1646,
      weekly: 51,
    },
  },
})
