import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lensmcp/vite-plugin',
  description: 'LensMCP Vite plugin — valtio alias, source transform, and browser event bridge.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lensmcp',
    'mcp',
    'observability',
    'ai-agents',
    'claude',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'kiwiapps-ltd/lensmcp',
    npm: '@lensmcp/vite-plugin',
  },
  links: {
    github: 'https://github.com/kiwiapps-ltd/lensmcp',
    npm: 'https://www.npmjs.com/package/@lensmcp/vite-plugin',
    website: 'https://github.com/kiwiapps-ltd/lensmcp#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2550,
      weekly: 1030,
    },
  },
})
