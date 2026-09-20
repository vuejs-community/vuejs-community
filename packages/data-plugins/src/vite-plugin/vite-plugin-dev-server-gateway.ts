import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-server-gateway',
  description: 'Run many Vite dev servers at once, behind one origin, with a live index of every preview.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dev-server',
    'devtools',
    'preview',
    'proxy',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sushichan044/vite-plugin-dev-server-gateway',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-server-gateway',
    website: 'https://github.com/sushichan044/vite-plugin-dev-server-gateway#readme',
  },
  source: {
    github: 'sushichan044/vite-plugin-dev-server-gateway',
    npm: 'vite-plugin-dev-server-gateway',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 18,
      weekly: 6,
    },
  },
})
