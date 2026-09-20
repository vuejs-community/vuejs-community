import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stimulus',
  description: 'Rollup.js plugin for rolling Stimulus.js applications',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'stimulus.js',
    'rollup.js',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/lightster/rollup-plugin-stimulus',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stimulus',
    website: 'https://github.com/lightster/rollup-plugin-stimulus#readme',
  },
  source: {
    github: 'lightster/rollup-plugin-stimulus',
    npm: 'rollup-plugin-stimulus',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 263,
      weekly: 41,
    },
  },
})
