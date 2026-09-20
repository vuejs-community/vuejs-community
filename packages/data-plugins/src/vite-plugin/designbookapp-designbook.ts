import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@designbookapp/designbook',
  description: 'Your React app from every angle — edit theme tokens, copy, and feature flags on the running app; an embedded Pi coding agent lands every edit as code.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/designbookapp/designbook',
    npm: 'https://www.npmjs.com/package/@designbookapp/designbook',
    website: 'https://designbook.app',
  },
  source: {
    github: 'designbookapp/designbook',
    npm: '@designbookapp/designbook',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 2,
    },
  },
})
