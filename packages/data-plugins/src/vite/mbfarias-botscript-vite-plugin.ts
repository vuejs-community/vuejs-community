import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mbfarias/botscript-vite-plugin',
  description: 'Vite plugin for botscript: transforms *.bs files to TypeScript at build time.',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'botscript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/marcelofarias/botscript',
    npm: 'https://www.npmjs.com/package/@mbfarias/botscript-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 4,
    },
  },
})
