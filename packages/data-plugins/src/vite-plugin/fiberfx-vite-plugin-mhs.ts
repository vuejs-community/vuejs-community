import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fiberfx/vite-plugin-mhs',
  description: 'The Vite plugin for Mercury Hyperscript (MHS): automatic JSX on @fiberfx/hyperscript, explicit source and installed resolution, and clear refusals for modes that aren\'t available.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'mercury',
    'hyperscript',
    'jsx',
  ],
  links: {
    github: 'https://github.com/fiberfx/mercury',
    npm: 'https://www.npmjs.com/package/@fiberfx/vite-plugin-mhs',
    website: 'https://github.com/fiberfx/mercury/tree/main/vite-plugin-mhs#readme',
  },
  source: {
    github: 'fiberfx/mercury',
    npm: '@fiberfx/vite-plugin-mhs',
  },
})
