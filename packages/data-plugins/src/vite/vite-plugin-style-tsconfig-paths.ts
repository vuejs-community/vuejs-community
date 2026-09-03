import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-style-tsconfig-paths',
  description: '> A Vite plugin to resolve paths from tsconfig.json in style imports(less, sass, scss, stylus, css)',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'scss',
    'less',
    'stylus',
    'typescript',
    'tsconfig',
    'paths',
    'alias',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/WangYuLue/vite-plugin-style-tsconfig-paths',
    npm: 'https://www.npmjs.com/package/vite-plugin-style-tsconfig-paths',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 5,
    },
  },
})
