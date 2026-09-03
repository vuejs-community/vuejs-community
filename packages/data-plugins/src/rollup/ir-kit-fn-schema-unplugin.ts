import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ir-kit/fn-schema-unplugin',
  description: 'Bundler plugin for fn-schema. Exposes a virtual module that resolves to the extracted bundle, with HMR on source change in dev. Built on unplugin so the same package powers Vite, webpack, Rollup, esbuild, Rspack, Rolldown, and Farm.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'json-schema',
    'function-signature',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'esbuild-plugin',
    'unplugin',
    'hmr',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ir-kit/ir-kit',
    npm: 'https://www.npmjs.com/package/@ir-kit/fn-schema-unplugin',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
