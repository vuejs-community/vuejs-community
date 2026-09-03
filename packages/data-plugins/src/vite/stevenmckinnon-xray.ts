import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stevenmckinnon/xray',
  description: 'Hover any element in your running app and see which design tokens its computed styles map to — and which of them are locked to a single theme or density.',
  version: '0.4.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'design-tokens',
    'design-system',
    'css-custom-properties',
    'devtools',
    'theming',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stevenmckinnon/xray',
    npm: 'https://www.npmjs.com/package/@stevenmckinnon/xray',
  },
  stats: {
    downloads: {
      monthly: 1100,
      weekly: 29,
    },
  },
})
