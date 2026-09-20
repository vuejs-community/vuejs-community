import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uaight',
  description: 'A component explorer that runs inside your application\'s own Vite dev server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'component-explorer',
    'storybook',
    'fixtures',
    'design-system',
  ],
  links: {
    github: 'https://github.com/aussieljk/uaight',
    npm: 'https://www.npmjs.com/package/uaight',
    website: 'https://github.com/aussieljk/uaight#readme',
  },
  source: {
    github: 'aussieljk/uaight',
    npm: 'uaight',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 62,
      weekly: 10,
    },
  },
})
