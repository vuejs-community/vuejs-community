import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-react-markdown',
  description: 'Compile Markdown to React component',
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
    'markdown-it',
  ],
  source: {
    github: 'clover-you/unplugin-react-markdown',
    npm: 'unplugin-react-markdown',
  },
  links: {
    github: 'https://github.com/clover-you/unplugin-react-markdown',
    npm: 'https://www.npmjs.com/package/unplugin-react-markdown',
    website: 'https://github.com/clover-you/unplugin-react-markdown#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
