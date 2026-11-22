import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@switchyard-ts/cli',
  description: 'The switchyard command: diagrams, xstate/SCXML export and import from machine modules; plus a Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'statechart',
    'cli',
    'vite-plugin',
    'diagram',
  ],
  links: {
    github: 'https://github.com/joegaudet/switchyard',
    npm: 'https://www.npmjs.com/package/@switchyard-ts/cli',
    website: 'https://joegaudet.com/switchyard/',
  },
  source: {
    github: 'joegaudet/switchyard',
    npm: '@switchyard-ts/cli',
  },
})
