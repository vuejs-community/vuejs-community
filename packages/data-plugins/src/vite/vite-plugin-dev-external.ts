import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-external',
  description: '开发过程中排除特定依赖项.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'externalize-dependencies',
    'dev',
    'dependencies',
    'utils',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/PunchlY/vite-plugin-dev-external',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-external',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 0,
    },
  },
})
