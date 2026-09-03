import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'domflax',
  description: 'Compile-time DOM flattener and semantic CSS compressor — fewer DOM nodes, smaller class sets, identical rendered UI.',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'dom',
    'css',
    'tailwind',
    'optimizer',
    'jsx',
    'html',
    'vite-plugin',
    'webpack-plugin',
    'unplugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Krishnesh-Mishra/domflax',
    npm: 'https://www.npmjs.com/package/domflax',
  },
  stats: {
    downloads: {
      monthly: 95,
      weekly: 2,
    },
  },
})
