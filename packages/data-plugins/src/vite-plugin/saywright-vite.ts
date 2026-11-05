import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@saywright/vite',
  description: 'Vite plugin for Saywright: traces every element of your running React app to its file and line, so you can point at it and say what to change. Dev server only.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'saywright',
    'click-to-source',
    'click-to-component',
    'open-in-editor',
    'source-location',
    'developer-tools',
    'devtools',
    'visual-editing',
  ],
  links: {
    github: 'https://github.com/ahmedbakr/saywright',
    npm: 'https://www.npmjs.com/package/@saywright/vite',
    website: 'https://github.com/ahmedbakr/saywright/tree/main/packages/vite#readme',
  },
  source: {
    github: 'ahmedbakr/saywright',
    npm: '@saywright/vite',
  },
})
