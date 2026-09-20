import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@react-code-view/unplugin',
  description: 'Build tool plugins for react-code-view (Webpack, Vite, Rollup, esbuild, Rspack)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'markdown',
    'webpack',
    'vite',
    'rollup',
    'esbuild',
    'rspack',
    'unplugin',
    'react-code-view',
    'code-view',
    'loader',
  ],
  links: {
    github: 'https://github.com/simonguo/react-code-view',
    npm: 'https://www.npmjs.com/package/@react-code-view/unplugin',
    website: 'https://github.com/simonguo/react-code-view#readme',
  },
  source: {
    github: 'simonguo/react-code-view',
    npm: '@react-code-view/unplugin',
  },
  stats: {
    stars: 199,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
