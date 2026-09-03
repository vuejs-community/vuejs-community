import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mergecss',
  description: 'A plugin to combine all your CSS files into one and optionally remove the references to the old files from your HTML pages.',
  version: '0.1.20',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'minifier',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-mergecss',
  },
  stats: {
    downloads: {
      monthly: 59,
      weekly: 13,
    },
  },
})
