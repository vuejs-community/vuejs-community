import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@warpkit/vite-plugin',
  description: 'Vite plugin for WarpKit development tooling',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'warpkit',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/upstat-io/warpkit',
    npm: 'https://www.npmjs.com/package/@warpkit/vite-plugin',
    website: 'https://github.com/upstat-io/warpkit#readme',
  },
  source: {
    github: 'upstat-io/warpkit',
    npm: '@warpkit/vite-plugin',
  },
  stats: {
    stars: 41,
    downloads: {
      monthly: 357,
      weekly: 343,
    },
  },
})
