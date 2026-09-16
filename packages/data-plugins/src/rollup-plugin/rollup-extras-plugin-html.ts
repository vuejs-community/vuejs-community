import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-html',
  description: 'Rollup plugin to inject assets names into html template.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'html',
    'bundle',
  ],
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-html',
  },
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-html',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-html/README.md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 1,
    },
  },
})
