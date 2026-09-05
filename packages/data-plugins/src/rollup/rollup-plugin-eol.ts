import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eol',
  description: 'A Rollup plugin for normalizing line endings in rollup output files, rollup watcher files and/or a custom glob pattern of files',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'plugin',
    'bundle',
    'eol',
    'end-of-line',
    'line-breaks',
    'newline',
    'cr',
    'lf',
    'crlf',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/pfaciana/rollup-plugin-eol',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eol',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
