import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@conciv/it',
  description: 'Conceive it. The conciv dev agent, one install. Plugin for vite, webpack, rspack, rollup, esbuild, nextjs.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ai',
    'conciv',
    'dev-agent',
    'embeddable',
    'vite-plugin',
  ],
  source: {
    github: 'conciv-dev/conciv',
    npm: '@conciv/it',
  },
  links: {
    github: 'https://github.com/conciv-dev/conciv',
    npm: 'https://www.npmjs.com/package/@conciv/it',
    website: 'https://conciv.dev',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 271,
      weekly: 8,
    },
  },
})
