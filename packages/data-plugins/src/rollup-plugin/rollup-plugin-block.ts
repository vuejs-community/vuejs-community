import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-block',
  description: 'Ensure certain files don\'t become part of the build.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'block',
    'import',
  ],
  links: {
    github: 'https://github.com/tjenkinson/rollup-plugin-block',
    npm: 'https://www.npmjs.com/package/rollup-plugin-block',
    website: 'https://github.com/tjenkinson/rollup-plugin-block#readme',
  },
  source: {
    github: 'tjenkinson/rollup-plugin-block',
    npm: 'rollup-plugin-block',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 9,
    },
  },
})
