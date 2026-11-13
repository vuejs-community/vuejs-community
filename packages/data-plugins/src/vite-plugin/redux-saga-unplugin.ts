import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@redux-saga/unplugin',
  description: 'Attaches source locations to sagas and effects so redux-saga can print saga stacks. One plugin for Vite, Rollup, Rolldown, webpack, Rspack and esbuild.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'redux-saga',
    'unplugin',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'rspack-plugin',
    'esbuild-plugin',
  ],
  links: {
    github: 'https://github.com/redux-saga/redux-saga',
    npm: 'https://www.npmjs.com/package/@redux-saga/unplugin',
    website: 'https://redux-saga.js.org/',
  },
  source: {
    github: 'redux-saga/redux-saga',
    npm: '@redux-saga/unplugin',
  },
})
