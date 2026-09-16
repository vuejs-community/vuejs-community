import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zenphp/zenvite',
  description: 'Plugin for running a Vite dev server for your Zen applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'zen',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: '@zenphp/zenvite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@zenphp/zenvite',
    website: 'https://gitlab.com/zenphp/zenvite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
