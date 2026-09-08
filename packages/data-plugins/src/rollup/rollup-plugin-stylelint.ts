import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylelint',
  description: 'Verify entry point and all imported files with stylelint',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'stylelint',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'tanyaisinmybed/rollup-plugin-stylelint',
    npm: 'rollup-plugin-stylelint',
  },
  links: {
    github: 'https://github.com/tanyaisinmybed/rollup-plugin-stylelint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylelint',
  },
  stats: {
    downloads: {
      monthly: 6836,
      weekly: 1429,
    },
  },
})
