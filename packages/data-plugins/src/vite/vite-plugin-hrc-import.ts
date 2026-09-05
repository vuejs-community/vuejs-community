import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hrc-import',
  description: 'Automatically use path import for components of hrc packages to reduce bundle size',
  version: '1.2.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Hdoc1509/hrc',
    npm: 'https://www.npmjs.com/package/vite-plugin-hrc-import',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
