import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kekonic/diagrams-unplugin',
  description: 'KDiagram file imports for Vite, Rollup, Rolldown, Webpack, Rspack, and esbuild.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'diagram',
    'kdiagram',
    'rollup',
    'unplugin',
    'vite',
    'webpack',
  ],
  source: {
    github: 'kekonic/diagrams',
    npm: '@kekonic/diagrams-unplugin',
  },
  links: {
    github: 'https://github.com/kekonic/diagrams',
    npm: 'https://www.npmjs.com/package/@kekonic/diagrams-unplugin',
    website: 'https://github.com/kekonic/diagrams#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 696,
      weekly: 23,
    },
  },
})
