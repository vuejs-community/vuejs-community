import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-react-components-vite',
  description: 'On-demand components auto importing for React',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'snowingfox/unplugin-react-components',
    npm: 'unplugin-react-components-vite',
  },
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
