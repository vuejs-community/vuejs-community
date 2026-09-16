import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-elm-symfony-bridge',
  description: 'Vite plugin exposing symfony\'s translations and routing to elm.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'mdevlamynck/elm-symfony-bridge',
    npm: 'vite-plugin-elm-symfony-bridge',
  },
  links: {
    github: 'https://github.com/mdevlamynck/elm-symfony-bridge',
    npm: 'https://www.npmjs.com/package/vite-plugin-elm-symfony-bridge',
    website: 'https://github.com/mdevlamynck/elm-symfony-bridge/tree/master/vite#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 7,
    },
  },
})
