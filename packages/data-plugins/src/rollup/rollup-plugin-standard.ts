import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-standard',
  description: 'Verify imported files with StandardJS',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'standard',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'termosa/rollup-plugin-standard',
    npm: 'rollup-plugin-standard',
  },
  links: {
    github: 'https://github.com/termosa/rollup-plugin-standard',
    npm: 'https://www.npmjs.com/package/rollup-plugin-standard',
  },
  stats: {
    downloads: {
      monthly: 79,
      weekly: 13,
    },
  },
})
