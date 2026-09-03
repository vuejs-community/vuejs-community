import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'swift-node-unplugin',
  description: 'Unplugin adapters that build and bundle Swift Node native assets.',
  version: '1.0.1',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/biw/swift-node',
    npm: 'https://www.npmjs.com/package/swift-node-unplugin',
  },
  stats: {
    downloads: {
      monthly: 2060,
      weekly: 468,
    },
  },
})
