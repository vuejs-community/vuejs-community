import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@originjs/vite-plugin-require-context',
  description: 'A vite plugin that support require.context in vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'require.context',
  ],
  source: {
    github: 'originjs/vite-plugins',
    npm: '@originjs/vite-plugin-require-context',
  },
  links: {
    github: 'https://github.com/originjs/vite-plugins',
    npm: 'https://www.npmjs.com/package/@originjs/vite-plugin-require-context',
    website: 'https://github.com/originjs/vite-plugins/tree/main/packages/vite-plugin-require-context#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27759,
      weekly: 5214,
    },
  },
})
