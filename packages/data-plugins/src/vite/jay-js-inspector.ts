import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jay-js/inspector',
  description: 'Development inspector plugin for Jay JS components - click-to-source functionality',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'Jay',
    'js',
    'inspector',
    'devtools',
    'click-to-source',
    'vite-plugin',
    'development-tools',
    'debugging',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AJCastello/jay-js',
    npm: 'https://www.npmjs.com/package/@jay-js/inspector',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 6,
    },
  },
})
