import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kekonic/diagrams-unplugin',
  description: 'KDiagram file imports for Vite, Rollup, Rolldown, Webpack, Rspack, and esbuild.',
  version: '1.0.0-rc.8',
  category: 'plugin',
  tags: [
    'diagram',
    'kdiagram',
    'rollup',
    'unplugin',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/kekonic/diagrams',
    npm: 'https://www.npmjs.com/package/@kekonic/diagrams-unplugin',
  },
  stats: {
    downloads: {
      monthly: 377,
      weekly: 151,
    },
  },
})
