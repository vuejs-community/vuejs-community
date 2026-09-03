import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-glob-guard',
  description: 'Opt-in guardrails for import.meta.glob() required globs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'import-meta-glob',
    'glob',
    'tooling',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-glob-guard',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 0,
    },
  },
})
