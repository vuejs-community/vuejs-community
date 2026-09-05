import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-scrub',
  description: 'Remove lines or sections of code based on custom-defined tags.',
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
