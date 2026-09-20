import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mbfarias/botscript-vite-plugin',
  description: 'Vite plugin for botscript: transforms *.bs files to TypeScript at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'botscript',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/marcelofarias/botscript',
    npm: 'https://www.npmjs.com/package/@mbfarias/botscript-vite-plugin',
    website: 'https://github.com/marcelofarias/botscript#readme',
  },
  source: {
    github: 'marcelofarias/botscript',
    npm: '@mbfarias/botscript-vite-plugin',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
