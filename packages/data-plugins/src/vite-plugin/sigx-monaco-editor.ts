import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sigx/monaco-editor',
  description: 'Pluggable Monaco editor wrapper for sigx with prebundled assets and a Vite plugin that bypasses bundler optimization',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sigx',
    'monaco',
    'monaco-editor',
    'code-editor',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/signalxjs/monaco-editor',
    npm: 'https://www.npmjs.com/package/@sigx/monaco-editor',
    website: 'https://sigx.dev/monaco/',
  },
  source: {
    github: 'signalxjs/monaco-editor',
    npm: '@sigx/monaco-editor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 455,
      weekly: 23,
    },
  },
})
