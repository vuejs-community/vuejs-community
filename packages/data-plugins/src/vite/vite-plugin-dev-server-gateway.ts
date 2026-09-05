import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-server-gateway',
  description: 'Run many Vite dev servers at once, behind one origin, with a live index of every preview.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'dev-server',
    'devtools',
    'preview',
    'proxy',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sushichan044/vite-plugin-dev-server-gateway',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-server-gateway',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 0,
    },
  },
})
