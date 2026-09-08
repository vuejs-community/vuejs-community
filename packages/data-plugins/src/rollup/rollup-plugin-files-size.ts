import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-files-size',
  description: 'Show your bundle files size',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'file',
    'size',
    'filesize',
    'bundle',
    'show',
    'output',
    'summary',
    'gzip',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'vladshcherbin/rollup-plugin-files-size',
    npm: 'rollup-plugin-files-size',
  },
  links: {
    github: 'https://github.com/vladshcherbin/rollup-plugin-files-size',
    npm: 'https://www.npmjs.com/package/rollup-plugin-files-size',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
