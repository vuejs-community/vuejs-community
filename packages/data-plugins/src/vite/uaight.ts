import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'uaight',
  description: 'A component explorer that runs inside your application\'s own Vite dev server.',
  version: '0.0.1-canary.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'component-explorer',
    'storybook',
    'fixtures',
    'design-system',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aussieljk/uaight',
    npm: 'https://www.npmjs.com/package/uaight',
  },
  stats: {
    downloads: {
      monthly: 503,
      weekly: 14,
    },
  },
})
