import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-progressbar',
  description: 'Rollup Progressbar Plugin',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'progress',
    'progressbar',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'thiagozanetti/rollup-plugin-progressbar',
    npm: 'rollup-plugin-progressbar',
  },
  links: {
    github: 'https://github.com/thiagozanetti/rollup-plugin-progressbar',
    npm: 'https://www.npmjs.com/package/rollup-plugin-progressbar',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
