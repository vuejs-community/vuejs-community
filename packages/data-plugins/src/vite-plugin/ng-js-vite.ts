import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ng-js-vite',
  description: 'Vite plugin that emits content-hashed AngularJS templates and inlines styleUrl CSS.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'angularjs',
    'templateUrl',
    'styleUrl',
  ],
  links: {
    github: 'https://github.com/IonCna/ng-js-vite',
    npm: 'https://www.npmjs.com/package/ng-js-vite',
    website: 'https://github.com/IonCna/ng-js-vite#readme',
  },
  source: {
    github: 'IonCna/ng-js-vite',
    npm: 'ng-js-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 292,
      weekly: 292,
    },
  },
})
