import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jay-js/inspector',
  description: 'Development inspector plugin for Jay JS components - click-to-source functionality',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'AJCastello/jay-js',
    npm: '@jay-js/inspector',
  },
  links: {
    github: 'https://github.com/AJCastello/jay-js',
    npm: 'https://www.npmjs.com/package/@jay-js/inspector',
    website: 'https://github.com/AJCastello/jay-js#readme',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
