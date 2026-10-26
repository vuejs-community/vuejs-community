import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/machine',
  description: 'Typed state machines for UI components and app logic: one file per machine, synchronous and allocation-free events, cached parts for every framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fsm',
    'state-machine',
    'statecharts',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/machine',
    website: 'https://github.com/menapo/kit/blob/main/packages/machine/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/machine',
  },
})
