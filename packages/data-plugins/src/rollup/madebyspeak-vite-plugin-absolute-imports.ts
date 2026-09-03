import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@madebyspeak/vite-plugin-absolute-imports',
  description: 'A plugin for vite to allow for aliased imports and absolute URL imports to be used in a deployed monorepo',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/MadeBySpeak/vite-plugin-absolute-imports',
    npm: 'https://www.npmjs.com/package/@madebyspeak/vite-plugin-absolute-imports',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 9,
    },
  },
})
