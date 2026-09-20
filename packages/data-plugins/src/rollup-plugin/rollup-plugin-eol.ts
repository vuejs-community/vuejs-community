import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eol',
  description: 'A Rollup plugin for normalizing line endings in rollup output files, rollup watcher files and/or a custom glob pattern of files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/pfaciana/rollup-plugin-eol',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eol',
    website: 'https://github.com/pfaciana/rollup-plugin-eol',
  },
  source: {
    github: 'pfaciana/rollup-plugin-eol',
    npm: 'rollup-plugin-eol',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
