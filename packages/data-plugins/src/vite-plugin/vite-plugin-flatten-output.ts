import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-flatten-output',
  description: 'Flatten nested HTML build output while preserving asset URLs.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'file-structure',
    'flatten-output',
    'vite-output-plugin',
    'vite-chrome-extension',
  ],
  links: {
    github: 'https://github.com/myudak/vite-plugin-flatten-output',
    npm: 'https://www.npmjs.com/package/vite-plugin-flatten-output',
    website: 'https://myudak.site/projects/vite-plugin-flatten-output',
  },
  source: {
    github: 'myudak/vite-plugin-flatten-output',
    npm: 'vite-plugin-flatten-output',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
