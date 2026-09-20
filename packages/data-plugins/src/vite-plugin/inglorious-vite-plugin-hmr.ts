import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inglorious/vite-plugin-hmr',
  description: 'Preserve Inglorious Web store state across Vite hot updates.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'inglorious',
    'hmr',
    'state-preservation',
    'inglorious-web',
  ],
  links: {
    github: 'https://github.com/IngloriousCoderz/inglorious-forge',
    npm: 'https://www.npmjs.com/package/@inglorious/vite-plugin-hmr',
    website: 'https://github.com/IngloriousCoderz/inglorious-forge/tree/main/packages/vite-plugin-hmr#readme',
  },
  source: {
    github: 'IngloriousCoderz/inglorious-forge',
    npm: '@inglorious/vite-plugin-hmr',
  },
  stats: {
    stars: 22,
    downloads: {
      monthly: 9,
      weekly: 9,
    },
  },
})
