import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@designbookapp/designbook',
  description: 'Your React app from every angle — edit theme tokens, copy, and feature flags on the running app; an embedded Pi coding agent lands every edit as code.',
  version: '0.5.2',
  category: 'plugin',
  tags: [
    'design-tool',
    'vite-plugin',
    'design-tokens',
    'i18n',
    'feature-flags',
    'figma',
    'coding-agent',
    'storybook-alternative',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/designbookapp/designbook',
    npm: 'https://www.npmjs.com/package/@designbookapp/designbook',
  },
  stats: {
    downloads: {
      monthly: 75,
      weekly: 9,
    },
  },
})
