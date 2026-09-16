import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@movable/rollup-plugin-html',
  description: 'HTML import plugin for rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'html',
  ],
  source: {
    github: 'bdadam/rollup-plugin-html',
    npm: '@movable/rollup-plugin-html',
  },
  links: {
    github: 'https://github.com/bdadam/rollup-plugin-html',
    npm: 'https://www.npmjs.com/package/@movable/rollup-plugin-html',
    website: 'https://github.com/bdadam/rollup-plugin-html',
  },
  stats: {
    stars: 38,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
