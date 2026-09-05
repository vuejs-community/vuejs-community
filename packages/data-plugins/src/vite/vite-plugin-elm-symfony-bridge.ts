import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-elm-symfony-bridge',
  description: 'Vite plugin exposing symfony\'s translations and routing to elm.',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'elm',
    'symfony',
    'bridge',
    'tools',
    'vite',
    'plugin',
    'vite-plugin',
    'translation',
    'routing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mdevlamynck/elm-symfony-bridge',
    npm: 'https://www.npmjs.com/package/vite-plugin-elm-symfony-bridge',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
