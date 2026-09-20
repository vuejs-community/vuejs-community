import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svgr2',
  description: 'unplugin to transform SVGs into React components. Uses [svgr](https://react-svgr.com/) under the hood.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/canvascat/unplugin-svgr',
    npm: 'https://www.npmjs.com/package/unplugin-svgr2',
    website: 'https://github.com/canvascat/unplugin-svgr#readme',
  },
  source: {
    github: 'canvascat/unplugin-svgr',
    npm: 'unplugin-svgr2',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
