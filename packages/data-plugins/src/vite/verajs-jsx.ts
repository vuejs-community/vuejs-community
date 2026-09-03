import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@verajs/jsx',
  description: 'JSX/TSX for VeraJS as a build plugin: compiles JSX into the renderer’s tagged templates. Zero runtime cost, zero dependencies.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'verajs',
    'vera',
    'jsx',
    'tsx',
    'vite-plugin',
    'buildless-optional',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vera-js/vera',
    npm: 'https://www.npmjs.com/package/@verajs/jsx',
  },
  stats: {
    downloads: {
      monthly: 596,
      weekly: 203,
    },
  },
})
