import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nora',
  description: 'A floating bar that switches your app between components. Point it at a folder.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'components',
    'preview',
    'storybook',
    'responsive',
  ],
  source: {
    github: 'kate-lastoskie/nora',
    npm: 'vite-plugin-nora',
  },
  links: {
    github: 'https://github.com/kate-lastoskie/nora',
    npm: 'https://www.npmjs.com/package/vite-plugin-nora',
    website: 'https://github.com/kate-lastoskie/nora#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
