import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@olton/rollup-plugin-typedoc',
  description: 'Typedoc compilation as a rollup plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'typedoc',
    'rollup',
    'rollup-plugin',
    'documentation',
    'typescript',
  ],
  source: {
    github: 'olton/rollup-plugin-typedoc',
    npm: '@olton/rollup-plugin-typedoc',
  },
  links: {
    github: 'https://github.com/olton/rollup-plugin-typedoc',
    npm: 'https://www.npmjs.com/package/@olton/rollup-plugin-typedoc',
    website: 'https://github.com/olton/rollup-plugin-typedoc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 80,
      weekly: 3,
    },
  },
})
