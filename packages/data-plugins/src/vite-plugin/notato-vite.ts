import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@notato/vite',
  description: 'Vite plugin for Notato: records where each element is written in your source, so feedback on a built app still points at the right line.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'jsx',
    'source-location',
    'notato',
  ],
  links: {
    github: 'https://github.com/notatorg/notato',
    npm: 'https://www.npmjs.com/package/@notato/vite',
    website: 'https://github.com/notatorg/notato/tree/main/packages/vite#readme',
  },
  source: {
    github: 'notatorg/notato',
    npm: '@notato/vite',
  },
})
