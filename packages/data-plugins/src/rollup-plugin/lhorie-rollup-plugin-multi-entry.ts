import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lhorie/rollup-plugin-multi-entry',
  description: 'Allows specifying multiple entry points with rollup.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rollup/rollup-plugin-multi-entry',
    npm: 'https://www.npmjs.com/package/@lhorie/rollup-plugin-multi-entry',
    website: 'https://github.com/rollup/rollup-plugin-multi-entry#readme',
  },
  source: {
    github: 'rollup/rollup-plugin-multi-entry',
    npm: '@lhorie/rollup-plugin-multi-entry',
  },
  stats: {
    stars: 171,
    downloads: {
      monthly: 15,
      weekly: 6,
    },
  },
})
