import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@magicmock/unplugin',
  description: 'Universal plugin for Magic Mock - works with Vite, Webpack, Rollup, and esbuild',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Charley3d/magic-mock',
    npm: 'https://www.npmjs.com/package/@magicmock/unplugin',
    website: 'https://github.com/Charley3d/magic-mock/tree/main/packages/unplugin#readme',
  },
  source: {
    github: 'Charley3d/magic-mock',
    npm: '@magicmock/unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 4,
    },
  },
})
