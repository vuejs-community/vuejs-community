import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-injs-jsx',
  description: 'convert JSX code in JS file, The default is Vue JSX. Parameters can be passed in and configured as react JSX',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'jsx',
    'in-js',
    'js',
    'vue',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yanquanfahei/vite-plugin-injs-jsx',
    npm: 'https://www.npmjs.com/package/vite-plugin-injs-jsx',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 4,
    },
  },
})
