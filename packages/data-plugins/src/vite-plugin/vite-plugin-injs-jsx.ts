import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-injs-jsx',
  description: 'convert JSX code in JS file, The default is Vue JSX. Parameters can be passed in and configured as react JSX',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'jsx',
    'in-js',
    'js',
    'vue',
    'react',
  ],
  links: {
    github: 'https://github.com/yanquanfahei/vite-plugin-injs-jsx',
    npm: 'https://www.npmjs.com/package/vite-plugin-injs-jsx',
    website: 'https://github.com/yanquanfahei/vite-plugin-injs-jsx#readme',
  },
  source: {
    github: 'yanquanfahei/vite-plugin-injs-jsx',
    npm: 'vite-plugin-injs-jsx',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 28,
      weekly: 3,
    },
  },
})
