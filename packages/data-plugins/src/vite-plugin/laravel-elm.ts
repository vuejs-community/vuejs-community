import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'laravel-elm',
  description: 'Vite plugin for compiling Elm in Laravel apps (companion to the loganhenson/laravel-elm composer package)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'laravel',
    'elm',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/loganhenson/laravel-elm-npm',
    npm: 'https://www.npmjs.com/package/laravel-elm',
    website: 'https://github.com/loganhenson/laravel-elm#readme',
  },
  source: {
    github: 'loganhenson/laravel-elm-npm',
    npm: 'laravel-elm',
  },
})
