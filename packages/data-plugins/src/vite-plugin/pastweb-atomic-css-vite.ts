import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pastweb/atomic-css-vite',
  description: 'plugin for Atom Css Utility Modules',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tailwind',
    'css',
    'atomic',
    'modules',
    'utility',
  ],
  source: {
    github: 'pastweb/atomic-css',
    npm: '@pastweb/atomic-css-vite',
  },
  links: {
    github: 'https://github.com/pastweb/atomic-css',
    npm: 'https://www.npmjs.com/package/@pastweb/atomic-css-vite',
    website: 'https://github.com/pastweb/atomic-css/tree/master/packages/vite#readme',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
