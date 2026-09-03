import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@conciv/it',
  description: 'Conceive it. The conciv dev agent, one install. Plugin for vite, webpack, rspack, rollup, esbuild, nextjs.',
  version: '0.0.19',
  category: 'plugin',
  tags: [
    'ai',
    'conciv',
    'dev-agent',
    'embeddable',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/conciv-dev/conciv',
    npm: 'https://www.npmjs.com/package/@conciv/it',
  },
  stats: {
    downloads: {
      monthly: 723,
      weekly: 33,
    },
  },
})
