import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hrc-import',
  description: 'Automatically use path import for components of hrc packages to reduce bundle size',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'config',
    'plugin',
    'import',
    'vite',
    'vite-config',
    'vite-plugin',
    'hrc',
    'hrc-config',
  ],
  source: {
    github: 'Hdoc1509/hrc',
    npm: 'vite-plugin-hrc-import',
  },
  links: {
    github: 'https://github.com/Hdoc1509/hrc',
    npm: 'https://www.npmjs.com/package/vite-plugin-hrc-import',
    website: 'https://hdoc1509.github.io/hrc/packages/vite-plugin-hrc-import',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 6,
    },
  },
})
