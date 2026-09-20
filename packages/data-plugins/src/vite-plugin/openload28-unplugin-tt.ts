import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@openload28/unplugin-tt',
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
    npm: 'https://www.npmjs.com/package/@openload28/unplugin-tt',
    website: 'https://github.com/load28/tt#readme',
  },
  source: {
    github: 'load28/tt',
    npm: '@openload28/unplugin-tt',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1429,
      weekly: 551,
    },
  },
})
