import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-react-components-updated',
  description: 'On-demand components auto importing for React',
  icon: 'icon:dark-unplugin',
  version: '0.2.0',
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
    npm: 'unplugin-react-components-updated',
  },
  links: {
    github: 'https://github.com/snowingfox/unplugin-react-components',
    npm: 'https://www.npmjs.com/package/unplugin-react-components-updated',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 7,
    },
  },
})
