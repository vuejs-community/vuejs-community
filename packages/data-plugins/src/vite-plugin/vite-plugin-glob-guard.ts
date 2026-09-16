import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-glob-guard',
  description: 'Opt-in guardrails for import.meta.glob() required globs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'import-meta-glob',
    'glob',
    'tooling',
  ],
  source: {
    npm: 'vite-plugin-glob-guard',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-glob-guard',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
