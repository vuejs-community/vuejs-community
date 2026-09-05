import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svgr2',
  description: 'unplugin to transform SVGs into React components. Uses [svgr](https://react-svgr.com/) under the hood.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/canvascat/unplugin-svgr',
    npm: 'https://www.npmjs.com/package/unplugin-svgr2',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
