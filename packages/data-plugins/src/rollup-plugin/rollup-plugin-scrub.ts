import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-scrub',
  description: 'Remove lines or sections of code based on custom-defined tags.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup-plugin-scrub',
    'scrub',
  ],
  links: {
    github: 'https://github.com/rav2040/rollup-plugin-scrub',
    npm: 'https://www.npmjs.com/package/rollup-plugin-scrub',
    website: 'https://github.com/rav2040/rollup-plugin-scrub#readme',
  },
  source: {
    github: 'rav2040/rollup-plugin-scrub',
    npm: 'rollup-plugin-scrub',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 34,
      weekly: 9,
    },
  },
})
