import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@docfy/ember-vite',
  description: 'Vite plugin for Docfy Ember integration with @embroider/vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'embroider',
    'ember',
    'docfy',
    'documentation',
  ],
  source: {
    github: 'josemarluedke/docfy',
    npm: '@docfy/ember-vite',
  },
  links: {
    github: 'https://github.com/josemarluedke/docfy',
    npm: 'https://www.npmjs.com/package/@docfy/ember-vite',
    website: 'https://github.com/josemarluedke/docfy#readme',
  },
  stats: {
    stars: 74,
    downloads: {
      monthly: 1246,
      weekly: 417,
    },
  },
})
