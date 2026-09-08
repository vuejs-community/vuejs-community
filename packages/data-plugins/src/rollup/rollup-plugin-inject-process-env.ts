import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inject-process-env',
  description: 'Inject environment variables in process.env with Rollup',
  icon: 'logos:rollupjs',
  version: '1.3.1',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'process',
    'env',
    'process.env',
    'environment variables',
    'inject',
    'browser',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'badcafe/rollup-plugin-inject-process-env',
    npm: 'rollup-plugin-inject-process-env',
  },
  links: {
    github: 'https://github.com/badcafe/rollup-plugin-inject-process-env',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inject-process-env',
  },
  stats: {
    downloads: {
      monthly: 203707,
      weekly: 49460,
    },
  },
})
