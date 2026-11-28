import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@r_masseater/song-format',
  description: 'The .fumx song format: a reader that turns a song into a typed value, key and chord analysis, import from TypeScript with Vite, a language server, MIDI and Ableton Live Set conversion that checks the result against the original, and a song report.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fumx',
    'langium',
    'language-server',
    'midi',
    'music',
    'parser',
    'tanstack-intent',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/masseater/ecosystems',
    npm: 'https://www.npmjs.com/package/@r_masseater/song-format',
    website: 'https://github.com/masseater/ecosystems/tree/main/libs/song-format#readme',
  },
  source: {
    github: 'masseater/ecosystems',
    npm: '@r_masseater/song-format',
  },
})
