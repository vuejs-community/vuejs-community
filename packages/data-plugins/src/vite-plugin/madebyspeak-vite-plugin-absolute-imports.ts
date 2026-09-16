import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@madebyspeak/vite-plugin-absolute-imports',
  description: 'A plugin for vite to allow for aliased imports and absolute URL imports to be used in a deployed monorepo',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'MadeBySpeak/vite-plugin-absolute-imports',
    npm: '@madebyspeak/vite-plugin-absolute-imports',
  },
  links: {
    github: 'https://github.com/MadeBySpeak/vite-plugin-absolute-imports',
    npm: 'https://www.npmjs.com/package/@madebyspeak/vite-plugin-absolute-imports',
    website: 'https://github.com/MadeBySpeak/vite-plugin-absolute-imports#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
