import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aippy/vite-plugins',
  description: 'Vite plugins for Aippy projects - Asset management and component tagging',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'aippy',
    'vite',
    'vite-plugin',
    'assets',
    'preload',
    'component-tagger',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@aippy/vite-plugins',
  },
  stats: {
    downloads: {
      monthly: 307,
      weekly: 168,
    },
  },
})
