import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dce',
  description: 'A rollup plugin that fails when you have dead code anywhere',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'Swatinem/rollup-plugin-dce',
    npm: 'rollup-plugin-dce',
  },
  links: {
    github: 'https://github.com/Swatinem/rollup-plugin-dce',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dce',
    website: 'https://github.com/Swatinem/rollup-plugin-dce#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
