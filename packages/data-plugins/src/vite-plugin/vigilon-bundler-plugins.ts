import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vigilon/bundler-plugins',
  description: 'Vigilon build plugins for Vite, Rollup, webpack, and esbuild: debug IDs and source map upload',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vigilon',
    'source-maps',
    'debug-id',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'esbuild-plugin',
  ],
  links: {
    github: 'https://github.com/vigilonio/js',
    npm: 'https://www.npmjs.com/package/@vigilon/bundler-plugins',
    website: 'https://vigilon.io',
  },
  source: {
    github: 'vigilonio/js',
    npm: '@vigilon/bundler-plugins',
  },
})
