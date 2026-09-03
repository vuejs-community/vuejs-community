import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-exec',
  description: 'Exec some code when the bundle you are building is finished.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'exec',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-exec',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
