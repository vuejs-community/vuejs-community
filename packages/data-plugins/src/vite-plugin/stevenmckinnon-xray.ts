import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stevenmckinnon/xray',
  description: 'Hover any element in your running app and see which design tokens its computed styles map to — and which of them are locked to a single theme or density.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'design-tokens',
    'design-system',
    'css-custom-properties',
    'devtools',
    'theming',
  ],
  source: {
    github: 'stevenmckinnon/xray',
    npm: '@stevenmckinnon/xray',
  },
  links: {
    github: 'https://github.com/stevenmckinnon/xray',
    npm: 'https://www.npmjs.com/package/@stevenmckinnon/xray',
    website: 'https://github.com/stevenmckinnon/xray#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 285,
      weekly: 4,
    },
  },
})
