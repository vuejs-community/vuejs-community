import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'domflax',
  description: 'Compile-time DOM flattener and semantic CSS compressor — fewer DOM nodes, smaller class sets, identical rendered UI.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Krishnesh-Mishra/domflax',
    npm: 'domflax',
  },
  links: {
    github: 'https://github.com/Krishnesh-Mishra/domflax',
    npm: 'https://www.npmjs.com/package/domflax',
    website: 'https://github.com/Krishnesh-Mishra/domflax#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 32,
      weekly: 8,
    },
  },
})
