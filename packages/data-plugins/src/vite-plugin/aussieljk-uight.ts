import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aussieljk/uight',
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
  source: {
    github: 'aussieljk/uight',
    npm: '@aussieljk/uight',
  },
  links: {
    github: 'https://github.com/aussieljk/uight',
    npm: 'https://www.npmjs.com/package/@aussieljk/uight',
    website: 'https://github.com/aussieljk/uight#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 488,
      weekly: 33,
    },
  },
})
