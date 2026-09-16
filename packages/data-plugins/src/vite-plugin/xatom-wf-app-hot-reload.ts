import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xatom/wf-app-hot-reload',
  description: 'A Vite plugin that adds seamless hot‑reloading to your Webflow application during development.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webflow',
    'vite-plugin',
    'hot-reload',
    'development',
    'xAtom',
    'live-reload',
  ],
  source: {
    github: 'xAtomTeam/wf-app-hot-reload',
    npm: '@xatom/wf-app-hot-reload',
  },
  links: {
    github: 'https://github.com/xAtomTeam/wf-app-hot-reload',
    npm: 'https://www.npmjs.com/package/@xatom/wf-app-hot-reload',
    website: 'https://github.com/xAtomTeam/wf-app-hot-reload#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 976,
      weekly: 420,
    },
  },
})
