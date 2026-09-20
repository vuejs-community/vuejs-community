import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@reatom/vite',
  description: 'Vite plugin for Reatom routing and JSX hot module replacement',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'routing',
    'jsx',
    'reatom',
  ],
  links: {
    github: 'https://github.com/reatom/reatom',
    npm: 'https://www.npmjs.com/package/@reatom/vite',
    website: 'https://www.reatom.dev/reference/vite',
  },
  source: {
    github: 'reatom/reatom',
    npm: '@reatom/vite',
  },
  stats: {
    stars: 1372,
    downloads: {
      monthly: 39,
      weekly: 12,
    },
  },
})
