import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-isomorphic-import',
  description: 'A vite plugin that allows you to configure whether to import modules in the server-side or client-side.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'isomorphic',
    'import',
    'ssr',
  ],
  source: {
    github: 'LyzSg/vite-plugin-isomorphic-import',
    npm: 'vite-plugin-isomorphic-import',
  },
  links: {
    github: 'https://github.com/LyzSg/vite-plugin-isomorphic-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-isomorphic-import',
    website: 'https://github.com/LyzSg/vite-plugin-isomorphic-import#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
