import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@magicmock/unplugin',
  description: 'Universal plugin for Magic Mock - works with Vite, Webpack, Rollup, and esbuild',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
    'rollup',
    'rollup-plugin',
    'esbuild',
    'esbuild-plugin',
    'mock',
    'http',
    'request',
    'recording',
    'replay',
    'fetch',
    'xhr',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/Charley3d/magic-mock',
    npm: 'https://www.npmjs.com/package/@magicmock/unplugin',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 8,
    },
  },
})
