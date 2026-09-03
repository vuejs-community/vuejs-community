import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-yaml',
  description: 'import yaml files inside code files. Types are generated dynamically for TS.',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'yaml',
    'import',
    'vite',
    'rollup',
    'typescript',
    'ts',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/HussainTaj-W/rollup-plugin-import-yaml',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-yaml',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 4,
    },
  },
})
