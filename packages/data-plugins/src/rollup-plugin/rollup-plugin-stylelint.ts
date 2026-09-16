import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylelint',
  description: 'Verify entry point and all imported files with stylelint',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'stylelint',
  ],
  source: {
    github: 'tanyaisinmybed/rollup-plugin-stylelint',
    npm: 'rollup-plugin-stylelint',
  },
  links: {
    github: 'https://github.com/tanyaisinmybed/rollup-plugin-stylelint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylelint',
    website: 'https://github.com/tanyaisinmybed/rollup-plugin-stylelint#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 5499,
      weekly: 573,
    },
  },
})
