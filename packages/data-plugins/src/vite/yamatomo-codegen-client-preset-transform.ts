import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@yamatomo/codegen-client-preset-transform',
  description: 'Transform the code of a project that uses [client-preset](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) into a tree-shakeable code.',
  version: '0.1.0-beta.1',
  category: 'plugin',
  tags: [
    'graphql-codegen',
    'preset-client',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Yama-Tomo/codegen-client-preset-transform',
    npm: 'https://www.npmjs.com/package/@yamatomo/codegen-client-preset-transform',
  },
  stats: {
    downloads: {
      monthly: 71,
      weekly: 43,
    },
  },
})
