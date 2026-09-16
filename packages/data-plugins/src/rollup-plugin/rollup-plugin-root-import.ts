import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-root-import',
  description: 'Add the ability to import modules by the root path, like Meteor',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'mixmaxhq/rollup-plugin-root-import',
    npm: 'rollup-plugin-root-import',
  },
  links: {
    github: 'https://github.com/mixmaxhq/rollup-plugin-root-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-root-import',
    website: 'https://github.com/mixmaxhq/rollup-plugin-root-import#readme',
  },
  stats: {
    stars: 38,
    downloads: {
      monthly: 1203,
      weekly: 258,
    },
  },
})
