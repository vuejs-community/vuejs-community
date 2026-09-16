import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-external',
  description: '开发过程中排除特定依赖项.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'externalize-dependencies',
    'dev',
    'dependencies',
    'utils',
  ],
  source: {
    github: 'PunchlY/vite-plugin-dev-external',
    npm: 'vite-plugin-dev-external',
  },
  links: {
    github: 'https://github.com/PunchlY/vite-plugin-dev-external',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-external',
    website: 'https://github.com/PunchlY/vite-plugin-dev-external#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
