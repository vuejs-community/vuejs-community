import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-globlin',
  description: 'Rollup plugin that provides file watching, copy, transform, repath and rename capabilities.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'globs',
    'file transforms',
  ],
  source: {
    github: 'panoply/rollup-plugin-globlin',
    npm: 'rollup-plugin-globlin',
  },
  links: {
    github: 'https://github.com/panoply/rollup-plugin-globlin',
    npm: 'https://www.npmjs.com/package/rollup-plugin-globlin',
    website: 'https://github.com/panoply/rollup-plugin-globlin#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 79,
      weekly: 8,
    },
  },
})
