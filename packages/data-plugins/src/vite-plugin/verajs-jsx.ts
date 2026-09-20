import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@verajs/jsx',
  description: 'JSX/TSX for VeraJS as a build plugin: compiles JSX into the renderer’s tagged templates. Zero runtime cost, zero dependencies.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'verajs',
    'vera',
    'jsx',
    'tsx',
    'vite-plugin',
    'buildless-optional',
  ],
  links: {
    github: 'https://github.com/vera-js/vera',
    npm: 'https://www.npmjs.com/package/@verajs/jsx',
    website: 'https://verajs.dev',
  },
  source: {
    github: 'vera-js/vera',
    npm: '@verajs/jsx',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 615,
      weekly: 9,
    },
  },
})
