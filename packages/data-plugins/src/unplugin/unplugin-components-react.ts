import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-components-react',
  description: 'On-demand components auto importing for React',
  icon: 'icon:dark-unplugin',
  version: '0.1.6',
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
  source: {
    github: 'snowingfox/unplugin-components-react',
    npm: 'unplugin-components-react',
  },
  links: {
    github: 'https://github.com/snowingfox/unplugin-components-react',
    npm: 'https://www.npmjs.com/package/unplugin-components-react',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
