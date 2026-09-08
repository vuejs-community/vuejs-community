import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-scrub',
  description: 'Remove lines or sections of code based on custom-defined tags.',
  icon: 'logos:rollupjs',
  version: '1.0.12',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup-plugin-scrub',
    'scrub',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'rav2040/rollup-plugin-scrub',
    npm: 'rollup-plugin-scrub',
  },
  links: {
    github: 'https://github.com/rav2040/rollup-plugin-scrub',
    npm: 'https://www.npmjs.com/package/rollup-plugin-scrub',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 1,
    },
  },
})
