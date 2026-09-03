import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-standard',
  description: 'Verify imported files with StandardJS',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'standard',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/termosa/rollup-plugin-standard',
    npm: 'https://www.npmjs.com/package/rollup-plugin-standard',
  },
  stats: {
    downloads: {
      monthly: 68,
      weekly: 20,
    },
  },
})
