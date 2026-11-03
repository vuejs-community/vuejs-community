import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@compmd/vite',
  description: 'A Vite plugin for CompMD: reads compmd.config.json, gives the processor the app\'s packs, serves the sandbox and the packs\' files, and bundles the app\'s own trusted components.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'compmd',
    'markdown',
    'components',
    'vite',
    'vite-plugin',
    'sandbox',
  ],
  links: {
    github: 'https://github.com/comp-markdown/compmd',
    npm: 'https://www.npmjs.com/package/@compmd/vite',
    website: 'https://compmd.hakanserce.com/',
  },
  source: {
    github: 'comp-markdown/compmd',
    npm: '@compmd/vite',
  },
})
