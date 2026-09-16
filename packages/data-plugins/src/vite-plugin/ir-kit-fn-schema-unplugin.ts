import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ir-kit/fn-schema-unplugin',
  description: 'Bundler plugin for fn-schema. Exposes a virtual module that resolves to the extracted bundle, with HMR on source change in dev. Built on unplugin so the same package powers Vite, webpack, Rollup, esbuild, Rspack, Rolldown, and Farm.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'ir-kit/ir-kit',
    npm: '@ir-kit/fn-schema-unplugin',
  },
  links: {
    github: 'https://github.com/ir-kit/ir-kit',
    npm: 'https://www.npmjs.com/package/@ir-kit/fn-schema-unplugin',
    website: 'https://github.com/ir-kit/ir-kit/tree/main/packages/fn-schema/unplugin',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
