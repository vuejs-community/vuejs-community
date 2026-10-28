import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mercury-fx/vite-plugin-mhs',
  description: 'The Vite plugin for Mercury Hyperscript (MHS): automatic JSX on @mercury-fx/hyperscript, explicit source and installed resolution, and clear refusals for modes that aren\'t available.',
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
    github: 'https://github.com/jonny-novikov/mercury-fx',
    npm: 'https://www.npmjs.com/package/@mercury-fx/vite-plugin-mhs',
    website: 'https://github.com/jonny-novikov/mercury-fx/tree/master/packages/vite-plugin-mhs#readme',
  },
  source: {
    github: 'jonny-novikov/mercury-fx',
    npm: '@mercury-fx/vite-plugin-mhs',
  },
})
