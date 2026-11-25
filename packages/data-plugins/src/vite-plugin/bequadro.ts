import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bequadro',
  description: 'Generates TypeScript and Python from FlatBuffers schemas: plain, mutable objects parsed all at once. Includes a Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'flatbuffers',
    'codegen',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/parched/bequadro',
    npm: 'https://www.npmjs.com/package/bequadro',
    website: 'https://github.com/parched/bequadro#readme',
  },
  source: {
    github: 'parched/bequadro',
    npm: 'bequadro',
  },
})
