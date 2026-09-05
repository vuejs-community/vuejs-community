import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-react-components-vite',
  description: 'On-demand components auto importing for React',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'react',
    'components',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/snowingfox/unplugin-react-components',
    npm: 'https://www.npmjs.com/package/unplugin-react-components-vite',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
