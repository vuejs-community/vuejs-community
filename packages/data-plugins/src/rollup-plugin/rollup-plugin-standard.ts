import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-standard',
  description: 'Verify imported files with StandardJS',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'standard',
  ],
  source: {
    github: 'termosa/rollup-plugin-standard',
    npm: 'rollup-plugin-standard',
  },
  links: {
    github: 'https://github.com/termosa/rollup-plugin-standard',
    npm: 'https://www.npmjs.com/package/rollup-plugin-standard',
    website: 'https://github.com/termosa/rollup-plugin-standard#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 63,
      weekly: 8,
    },
  },
})
