import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-react-components-vite',
  description: 'On-demand components auto importing for React',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'react',
    'components',
  ],
  links: {
    github: 'https://github.com/snowingfox/unplugin-react-components',
    npm: 'https://www.npmjs.com/package/unplugin-react-components-vite',
    website: 'https://github.com/snowingfox/unplugin-react-components#readme',
  },
  source: {
    github: 'snowingfox/unplugin-react-components',
    npm: 'unplugin-react-components-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
