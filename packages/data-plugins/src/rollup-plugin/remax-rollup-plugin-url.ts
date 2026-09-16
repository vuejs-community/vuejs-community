import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@remax/rollup-plugin-url',
  description: 'Inline import files as data-URIs, or copy them to output',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'url',
    'inline',
    'copy',
  ],
  source: {
    github: 'Swatinem/rollup-plugin-url',
    npm: '@remax/rollup-plugin-url',
  },
  links: {
    github: 'https://github.com/Swatinem/rollup-plugin-url',
    npm: 'https://www.npmjs.com/package/@remax/rollup-plugin-url',
    website: 'https://github.com/Swatinem/rollup-plugin-url#readme',
  },
  stats: {
    stars: 75,
    downloads: {
      monthly: 228,
      weekly: 17,
    },
  },
})
