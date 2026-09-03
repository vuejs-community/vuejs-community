import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sigx/monaco-editor',
  description: 'Pluggable Monaco editor wrapper for sigx with prebundled assets and a Vite plugin that bypasses bundler optimization',
  version: '0.7.1',
  category: 'plugin',
  tags: [
    'sigx',
    'monaco',
    'monaco-editor',
    'code-editor',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/signalxjs/monaco-editor',
    npm: 'https://www.npmjs.com/package/@sigx/monaco-editor',
  },
  stats: {
    downloads: {
      monthly: 1304,
      weekly: 71,
    },
  },
})
