import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-exec',
  description: 'Exec some code when the bundle you are building is finished.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'exec',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-exec',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-exec/README.md',
  },
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-exec',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
