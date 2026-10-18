import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@compatgate/bundler',
  description: 'A bundler plugin for webpack, rspack, Vite, Rollup, Rolldown and esbuild that finds JavaScript syntax and APIs that your browserslist targets do not support.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'browserslist',
    'compatibility',
    'esbuild',
    'rolldown',
    'rollup',
    'rspack',
    'unplugin',
    'vite',
    'webpack',
  ],
  links: {
    github: 'https://github.com/compatgate/compatgate',
    npm: 'https://www.npmjs.com/package/@compatgate/bundler',
    website: 'https://github.com/compatgate/compatgate/tree/main/packages/bundler#readme',
  },
  source: {
    github: 'compatgate/compatgate',
    npm: '@compatgate/bundler',
  },
})
