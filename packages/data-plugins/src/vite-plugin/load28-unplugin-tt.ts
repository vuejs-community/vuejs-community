import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@load28/unplugin-tt',
  description: 'Compile .tt and .ttx modules with ttc in Vite, Rollup, webpack, Rspack, esbuild and Farm',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unplugin',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'esbuild-plugin',
    'tt',
    'typescript',
  ],
  links: {
    github: 'https://github.com/load28/tt',
    npm: 'https://www.npmjs.com/package/@load28/unplugin-tt',
    website: 'https://github.com/load28/tt#readme',
  },
  source: {
    github: 'load28/tt',
    npm: '@load28/unplugin-tt',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1998,
      weekly: 67,
    },
  },
})
