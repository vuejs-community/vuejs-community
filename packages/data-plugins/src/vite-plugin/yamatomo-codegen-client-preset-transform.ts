import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yamatomo/codegen-client-preset-transform',
  description: 'Transform the code of a project that uses [client-preset](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) into a tree-shakeable code.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'graphql-codegen',
    'preset-client',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'Yama-Tomo/codegen-client-preset-transform',
    npm: '@yamatomo/codegen-client-preset-transform',
  },
  links: {
    github: 'https://github.com/Yama-Tomo/codegen-client-preset-transform',
    npm: 'https://www.npmjs.com/package/@yamatomo/codegen-client-preset-transform',
    website: 'https://github.com/Yama-Tomo/codegen-client-preset-transform',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 179,
      weekly: 41,
    },
  },
})
