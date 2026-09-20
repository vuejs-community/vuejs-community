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
  links: {
    github: 'https://github.com/josemarluedke/docfy',
    npm: 'https://www.npmjs.com/package/@docfy/ember-vite',
    website: 'https://github.com/josemarluedke/docfy#readme',
  },
  source: {
    github: 'josemarluedke/docfy',
    npm: '@docfy/ember-vite',
  },
  stats: {
    stars: 74,
    downloads: {
      monthly: 1246,
      weekly: 417,
    },
  },
})
