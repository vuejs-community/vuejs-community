import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@olton/rollup-plugin-typedoc',
  description: 'Typedoc compilation as a rollup plugin',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'typedoc',
    'rollup',
    'rollup-plugin',
    'documentation',
    'typescript',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/olton/rollup-plugin-typedoc',
    npm: 'https://www.npmjs.com/package/@olton/rollup-plugin-typedoc',
  },
  stats: {
    downloads: {
      monthly: 119,
      weekly: 32,
    },
  },
})
