import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-angularjs-template-cache',
  description: 'Plugin to build AngularJS templates cache.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'AngularJS',
    'templates',
    'cache',
  ],
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-angularjs-template-cache',
  },
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-angularjs-template-cache',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-angularjs-template-cache/README.md',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 30,
      weekly: 2,
    },
  },
})
