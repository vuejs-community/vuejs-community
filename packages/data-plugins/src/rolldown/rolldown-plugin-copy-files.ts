import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-copy-files',
  description: 'File copy plugin for Rolldown.',
  icon: 'logos:rolldown-icon',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'build-plugin',
    'copy',
    'copy-assets',
    'copy-files',
    'glob',
    'rolldown',
    'rolldown-plugin',
    'rollup',
    'rollup-plugin',
    'static-assets',
  ],
  types: [
    'rolldown-plugin',
  ],
  source: {
    github: 'ajiho/rolldown-plugin-copy-files',
    npm: 'rolldown-plugin-copy-files',
  },
  links: {
    github: 'https://github.com/ajiho/rolldown-plugin-copy-files',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-copy-files',
  },
  stats: {
    downloads: {
      monthly: 647,
      weekly: 24,
    },
  },
})
