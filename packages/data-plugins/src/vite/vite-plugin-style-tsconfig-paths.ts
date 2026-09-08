import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-style-tsconfig-paths',
  description: '> A Vite plugin to resolve paths from tsconfig.json in style imports(less, sass, scss, stylus, css)',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'WangYuLue/vite-plugin-style-tsconfig-paths',
    npm: 'vite-plugin-style-tsconfig-paths',
  },
  links: {
    github: 'https://github.com/WangYuLue/vite-plugin-style-tsconfig-paths',
    npm: 'https://www.npmjs.com/package/vite-plugin-style-tsconfig-paths',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 11,
    },
  },
})
